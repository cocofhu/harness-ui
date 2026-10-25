<script setup lang="ts">
import { computed, defineComponent, h, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import type { VNodeChild } from "vue";
import { ArrowDown, Check, ChevronDown, ChevronRight, CircleAlert, Cpu, FileSearch, FileText, PanelRightOpen, Plus, Sparkles, Terminal, X } from "lucide-vue-next";

/* Bundled provider marks: original LobeHub SVG assets.
MIT License

Copyright (c) 2023 LobeHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
type ModelProvider = "claude" | "openai" | "gemini" | "deepseek";
const modelProviderAssets: Record<ModelProvider, string> = {
  "claude": "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xhdWRlPC90aXRsZT48cGF0aCBkPSJtNC43MTQ0IDE1Ljk1NTUgNC43MTc0LTIuNjQ3MS4wNzktLjIzMDctLjA3OS0uMTI3NWgtLjIzMDdsLS43ODkzLS4wNDg2LTIuNjk1Ni0uMDcyOS0yLjMzNzUtLjA5NzEtMi4yNjQ2LS4xMjE0LS41NzA3LS4xMjE1LS41MzQzLS43MDQyLjA1NDYtLjM1MjIuNDc5Ny0uMzIxOC42ODYuMDYwOCAxLjUxNzkuMTAzMiAyLjI3NjcuMTU3OCAxLjY1MTQuMDk3MiAyLjQ0NjguMjU1aC4zODg2bC4wNTQ2LS4xNTc5LS4xMzM2LS4wOTcxLS4xMDMyLS4wOTcyTDYuOTczIDkuODM1NmwtMi41NS0xLjY4NzktMS4zMzU2LS45NzE0LS43MjI1LS40OTE4LS4zNjQzLS40NjE0LS4xNTc4LTEuMDA3OC42NTU3LS43MjI1Ljg4MDMuMDYwNy4yMjQ2LjA2MDcuODkyNS42ODYgMS45MDY0IDEuNDc1NCAyLjQ4OTMgMS44MzM2LjM2NDMuMzAzNS4xNDU3LS4xMDMyLjAxODItLjA3MjgtLjE2NC0uMjczMy0xLjM1MzktMi40NDY3LTEuNDQ1LTIuNDg5My0uNjQzNS0xLjAzMi0uMTctLjYxOTRjLS4wNjA3LS4yNTUtLjEwMzItLjQ2NzQtLjEwMzItLjcyODVMNi4yODcuMTMzNSA2LjY5OTcgMGwuOTk1Ny4xMzM2LjQxOS4zNjQyLjYxOTIgMS40MTQ3IDEuMDAxOCAyLjIyODIgMS41NTQzIDMuMDI5Ni40NTUzLjg5ODUuMjQyOS44MzE4LjA5MS4yNTVoLjE1Nzl2LS4xNDU3bC4xMjc1LTEuNzA2LjIzNjgtMi4wOTQ3LjIzMDctMi42OTU3LjA3ODktLjc1ODkuMzc2NC0uOTEwNy43NDY4LS40OTE4LjU4MjguMjc5My40Nzk3LjY4Ni0uMDY2OC40NDMzLS4yODUzIDEuODUxNy0uNTU4NiAyLjkwMjEtLjM2NDMgMS45NDI5aC4yMTI1bC4yNDI5LS4yNDI5Ljk4MzUtMS4zMDUzIDEuNjUxNC0yLjA2NDMuNzI4Ni0uODE5Ni44NS0uOTA0Ni41NDY0LS40MzExaDEuMDMyMWwuNzU5IDEuMTI5My0uMzQgMS4xNjU3LTEuMDYyNSAxLjM0NzgtLjg4MDQgMS4xNDE0LTEuMjYyOCAxLjctLjc4OTMgMS4zNi4wNzI5LjEwOTMuMTg4Mi0uMDE4MyAyLjg1MzUtLjYwNyAxLjU0MjEtLjI3OTQgMS44Mzk2LS4zMTU3LjgzMTguMzg4Ni4wOTEuMzk0Ni0uMzI3OC44MDc1LTEuOTY3LjQ4NTctMi4zMDcyLjQ2MTQtMy40MzY0LjgxMzYtLjA0MjUuMDMwNC4wNDg2LjA2MDcgMS41NDgyLjE0NTcuNjYxOC4wMzY0aDEuNjIxbDMuMDE3NS4yMjQ3Ljc4OTIuNTIyLjQ3MzYuNjM3Ni0uMDc5LjQ4NTctMS4yMTQyLjYxOTMtMS42MzkzLS4zODg2LTMuODI1LS45MTA3LTEuMzExMy0uMzI3OWgtLjE4MjJ2LjEwOTNsMS4wOTI5IDEuMDY4NiAyLjAwMzUgMS44MDkyIDIuNTA3NSAyLjMzMTQuMTI3NS41NzY4LS4zMjE4LjQ1NTQtLjM0LS4wNDg2LTIuMjAzOS0xLjY1NzUtLjg1LS43NDY4LTEuOTI0Ni0xLjYyMWgtLjEyNzV2LjE3bC40NDMyLjY0OTYgMi4zNDM2IDMuNTIxNC4xMjE0IDEuMDgwNy0uMTcuMzUyMS0uNjA3MS4yMTI1LS42Njc5LS4xMjE0LTEuMzcyMS0xLjkyNDZMMTQuMzggMTcuOTU5bC0xLjE0MTQtMS45NDI4LS4xMzk3LjA3OS0uNjc0IDcuMjU1Mi0uMzE1Ni4zNzAzLS43Mjg2LjI3OTMtLjYwNzEtLjQ2MTQtLjMyMTgtLjc0NjguMzIxOC0xLjQ3NTMuMzg4Ni0xLjkyNDYuMzE1Ny0xLjUzLjI4NTMtMS45MDA0LjE3LS42MzE0LS4wMTIxLS4wNDI1LS4xMzk3LjAxODItMS40MzI4IDEuOTY3Mi0yLjE3OTYgMi45NDQ2LTEuNzI0MyAxLjg0NTYtLjQxMjguMTY0LS43MTY0LS4zNzA0LjA2NjctLjY2MTguNDAwOC0uNTg4OSAyLjM4Ni0zLjAzNTcgMS40Mzg5LTEuODgyLjkyOS0xLjA4NjgtLjAwNjItLjE1NzloLS4wNTQ2bC02LjMzODUgNC4xMTY0LTEuMTI5My4xNDU3LS40ODU3LS40NTU0LjA2MDgtLjc0NjcuMjMwNy0uMjQyOSAxLjkwNjQtMS4zMTE0WiIvPjwvc3ZnPg==",
  "openai": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIxIiBoZWlnaHQ9IjcyMSIgdmlld0JveD0iMCAwIDcyMSA3MjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjM3XzI5MzQpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzE2MzdfMjkzNCkiPgo8cGF0aCBkPSJNMzA0LjI0NiAyOTQuNjExVjI0OS4wMjhDMzA0LjI0NiAyNDUuMTg5IDMwNS42ODcgMjQyLjMwOSAzMDkuMDQ0IDI0MC4zOTJMNDAwLjY5MiAxODcuNjEyQzQxMy4xNjcgMTgwLjQxNSA0MjguMDQyIDE3Ny4wNTggNDQzLjM5NCAxNzcuMDU4QzUwMC45NzEgMTc3LjA1OCA1MzcuNDQgMjIxLjY4MiA1MzcuNDQgMjY5LjE4MkM1MzcuNDQgMjcyLjU0IDUzNy40NCAyNzYuMzc5IDUzNi45NTkgMjgwLjIxOEw0NDEuOTU0IDIyNC41NThDNDM2LjE5NyAyMjEuMjAxIDQzMC40MzcgMjIxLjIwMSA0MjQuNjggMjI0LjU1OEwzMDQuMjQ2IDI5NC42MTFaTTUxOC4yNDUgNDcyLjE0NVYzNjMuMjI0QzUxOC4yNDUgMzU2LjUwNSA1MTUuMzY0IDM1MS43MDcgNTA5LjYwOCAzNDguMzQ5TDM4OS4xNzQgMjc4LjI5Nkw0MjguNTE5IDI1NS43NDNDNDMxLjg3NyAyNTMuODI2IDQzNC43NTcgMjUzLjgyNiA0MzguMTE1IDI1NS43NDNMNTI5Ljc2MiAzMDguNTIzQzU1Ni4xNTQgMzIzLjg3OSA1NzMuOTA1IDM1Ni41MDUgNTczLjkwNSAzODguMTcxQzU3My45MDUgNDI0LjYzNiA1NTIuMzE1IDQ1OC4yMjUgNTE4LjI0NSA0NzIuMTQxVjQ3Mi4xNDVaTTI3NS45MzcgMzc2LjE4MkwyMzYuNTkyIDM1My4xNTJDMjMzLjIzNSAzNTEuMjM1IDIzMS43OTQgMzQ4LjM1NCAyMzEuNzk0IDM0NC41MTVWMjM4Ljk1NkMyMzEuNzk0IDE4Ny42MTcgMjcxLjEzOSAxNDguNzQ5IDMyNC40IDE0OC43NDlDMzQ0LjU1NSAxNDguNzQ5IDM2My4yNjQgMTU1LjQ2OCAzNzkuMTAyIDE2Ny40NjNMMjg0LjU3OCAyMjIuMTY0QzI3OC44MjIgMjI1LjUyMSAyNzUuOTQyIDIzMC4zMTkgMjc1Ljk0MiAyMzcuMDM5VjM3Ni4xODZMMjc1LjkzNyAzNzYuMTgyWk0zNjAuNjI2IDQyNS4xMjJMMzA0LjI0NiAzOTMuNDU1VjMyNi4yODNMMzYwLjYyNiAyOTQuNjE2TDQxNy4wMDIgMzI2LjI4M1YzOTMuNDU1TDM2MC42MjYgNDI1LjEyMlpNMzk2Ljg1MiA1NzAuOTg5QzM3Ni42OTggNTcwLjk4OSAzNTcuOTg5IDU2NC4yNyAzNDIuMTUxIDU1Mi4yNzZMNDM2LjY3NCA0OTcuNTc0QzQ0Mi40MzEgNDk0LjIxNyA0NDUuMzExIDQ4OS40MTkgNDQ1LjMxMSA0ODIuNjk5VjM0My41NTJMNDg1LjEzOCAzNjYuNTgyQzQ4OC40OTUgMzY4LjQ5OSA0ODkuOTM2IDM3MS4zNzkgNDg5LjkzNiAzNzUuMjE5VjQ4MC43NzhDNDg5LjkzNiA1MzIuMTE3IDQ1MC4xMDkgNTcwLjk4NSAzOTYuODUyIDU3MC45ODVWNTcwLjk4OVpNMjgzLjEzNCA0NjMuOTlMMTkxLjQ4NiA0MTEuMjExQzE2NS4wOTQgMzk1Ljg1NCAxNDcuMzQzIDM2My4yMjkgMTQ3LjM0MyAzMzEuNTYyQzE0Ny4zNDMgMjk0LjYxNiAxNjkuNDE1IDI2MS41MDkgMjAzLjQ4IDI0Ny41OTNWMzU2Ljk5MUMyMDMuNDggMzYzLjcxIDIwNi4zNjEgMzY4LjUwOCAyMTIuMTE3IDM3MS44NjZMMzMyLjA3NCA0NDEuNDM3TDI5Mi43MjkgNDYzLjk5QzI4OS4zNzIgNDY1LjkwNyAyODYuNDkxIDQ2NS45MDcgMjgzLjEzNCA0NjMuOTlaTTI3Ny44NTkgNTQyLjY4QzIyMy42MzkgNTQyLjY4IDE4My44MTMgNTAxLjg5NSAxODMuODEzIDQ1MS41MTRDMTgzLjgxMyA0NDcuNjc1IDE4NC4yOTQgNDQzLjgzNiAxODQuNzcxIDQzOS45OTdMMjc5LjI5NSA0OTQuNjk4QzI4NS4wNTEgNDk4LjA1NiAyOTAuODEyIDQ5OC4wNTYgMjk2LjU2OCA0OTQuNjk4TDQxNy4wMDIgNDI1LjEyN1Y0NzAuNzFDNDE3LjAwMiA0NzQuNTQ5IDQxNS41NjIgNDc3LjQyOSA0MTIuMjA0IDQ3OS4zNDZMMzIwLjU1NyA1MzIuMTI2QzMwOC4wODEgNTM5LjMyMyAyOTMuMjA2IDU0Mi42OCAyNzcuODU0IDU0Mi42OEgyNzcuODU5Wk0zOTYuODUyIDU5OS43NzZDNDU0LjkxMSA1OTkuNzc2IDUwMy4zNyA1NTguNTEzIDUxNC40MSA1MDMuODEyQzU2OC4xNDkgNDg5Ljg5NiA2MDIuNjk2IDQzOS41MTUgNjAyLjY5NiAzODguMTc2QzYwMi42OTYgMzU0LjU4NyA1ODguMzAzIDMyMS45NjIgNTYyLjM5MiAyOTguNDVDNTY0Ljc5MSAyODguMzczIDU2Ni4yMzEgMjc4LjI5NiA1NjYuMjMxIDI2OC4yMjRDNTY2LjIzMSAxOTkuNjExIDUxMC41NzEgMTQ4LjI2NyA0NDYuMjc0IDE0OC4yNjdDNDMzLjMyMiAxNDguMjY3IDQyMC44NDYgMTUwLjE4NCA0MDguMzcgMTU0LjUwNUMzODYuNzc1IDEzMy4zOTIgMzU3LjAyNiAxMTkuOTU4IDMyNC40IDExOS45NThDMjY2LjM0MiAxMTkuOTU4IDIxNy44ODMgMTYxLjIyIDIwNi44NDMgMjE1LjkyMUMxNTMuMTA0IDIyOS44MzcgMTE4LjU1NyAyODAuMjE4IDExOC41NTcgMzMxLjU1N0MxMTguNTU3IDM2NS4xNDYgMTMyLjk1IDM5Ny43NzEgMTU4Ljg2MSA0MjEuMjgzQzE1Ni40NjIgNDMxLjM2IDE1NS4wMjIgNDQxLjQzNyAxNTUuMDIyIDQ1MS41MUMxNTUuMDIyIDUyMC4xMjMgMjEwLjY4MiA1NzEuNDY2IDI3NC45NzggNTcxLjQ2NkMyODcuOTMxIDU3MS40NjYgMzAwLjQwNyA1NjkuNTQ5IDMxMi44ODMgNTY1LjIyOEMzMzQuNDczIDU4Ni4zNDEgMzY0LjIyMiA1OTkuNzc2IDM5Ni44NTIgNTk5Ljc3NloiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjA2OTM0IDAuMDk5OTc1NikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xNjM3XzI5MzQiPgo8cmVjdCB3aWR0aD0iNDg0LjEzOSIgaGVpZ2h0PSI0NzkuODE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4LjU1NyAxMTkuOTU4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  "gemini": "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdlbWluaTwvdGl0bGU+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9IiMzMTg2RkYiPjwvcGF0aD48cGF0aCBkPSJNMjAuNjE2IDEwLjgzNWExNC4xNDcgMTQuMTQ3IDAgMDEtNC40NS0zLjAwMSAxNC4xMTEgMTQuMTExIDAgMDEtMy42NzgtNi40NTIuNTAzLjUwMyAwIDAwLS45NzUgMCAxNC4xMzQgMTQuMTM0IDAgMDEtMy42NzkgNi40NTIgMTQuMTU1IDE0LjE1NSAwIDAxLTQuNDUgMy4wMDFjLS42NS4yOC0xLjMxOC41MDUtMi4wMDIuNjc4YS41MDIuNTAyIDAgMDAwIC45NzVjLjY4NC4xNzIgMS4zNS4zOTcgMi4wMDIuNjc3YTE0LjE0NyAxNC4xNDcgMCAwMTQuNDUgMy4wMDEgMTQuMTEyIDE0LjExMiAwIDAxMy42NzkgNi40NTMuNTAyLjUwMiAwIDAwLjk3NSAwYy4xNzItLjY4NS4zOTctMS4zNTEuNjc3LTIuMDAzYTE0LjE0NSAxNC4xNDUgMCAwMTMuMDAxLTQuNDUgMTQuMTEzIDE0LjExMyAwIDAxNi40NTMtMy42NzguNTAzLjUwMyAwIDAwMC0uOTc1IDEzLjI0NSAxMy4yNDUgMCAwMS0yLjAwMy0uNjc4eiIgZmlsbD0idXJsKCNsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMC42MTYgMTAuODM1YTE0LjE0NyAxNC4xNDcgMCAwMS00LjQ1LTMuMDAxIDE0LjExMSAxNC4xMTEgMCAwMS0zLjY3OC02LjQ1Mi41MDMuNTAzIDAgMDAtLjk3NSAwIDE0LjEzNCAxNC4xMzQgMCAwMS0zLjY3OSA2LjQ1MiAxNC4xNTUgMTQuMTU1IDAgMDEtNC40NSAzLjAwMWMtLjY1LjI4LTEuMzE4LjUwNS0yLjAwMi42NzhhLjUwMi41MDIgMCAwMDAgLjk3NWMuNjg0LjE3MiAxLjM1LjM5NyAyLjAwMi42NzdhMTQuMTQ3IDE0LjE0NyAwIDAxNC40NSAzLjAwMSAxNC4xMTIgMTQuMTEyIDAgMDEzLjY3OSA2LjQ1My41MDIuNTAyIDAgMDAuOTc1IDBjLjE3Mi0uNjg1LjM5Ny0xLjM1MS42NzctMi4wMDNhMTQuMTQ1IDE0LjE0NSAwIDAxMy4wMDEtNC40NSAxNC4xMTMgMTQuMTEzIDAgMDE2LjQ1My0zLjY3OC41MDMuNTAzIDAgMDAwLS45NzUgMTMuMjQ1IDEzLjI0NSAwIDAxLTIuMDAzLS42Nzh6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8pIj48L3BhdGg+PHBhdGggZD0iTTIwLjYxNiAxMC44MzVhMTQuMTQ3IDE0LjE0NyAwIDAxLTQuNDUtMy4wMDEgMTQuMTExIDE0LjExMSAwIDAxLTMuNjc4LTYuNDUyLjUwMy41MDMgMCAwMC0uOTc1IDAgMTQuMTM0IDE0LjEzNCAwIDAxLTMuNjc5IDYuNDUyIDE0LjE1NSAxNC4xNTUgMCAwMS00LjQ1IDMuMDAxYy0uNjUuMjgtMS4zMTguNTA1LTIuMDAyLjY3OGEuNTAyLjUwMiAwIDAwMCAuOTc1Yy42ODQuMTcyIDEuMzUuMzk3IDIuMDAyLjY3N2ExNC4xNDcgMTQuMTQ3IDAgMDE0LjQ1IDMuMDAxIDE0LjExMiAxNC4xMTIgMCAwMTMuNjc5IDYuNDUzLjUwMi41MDIgMCAwMC45NzUgMGMuMTcyLS42ODUuMzk3LTEuMzUxLjY3Ny0yLjAwM2ExNC4xNDUgMTQuMTQ1IDAgMDEzLjAwMS00LjQ1IDE0LjExMyAxNC4xMTMgMCAwMTYuNDUzLTMuNjc4LjUwMy41MDMgMCAwMDAtLjk3NSAxMy4yNDUgMTMuMjQ1IDAgMDEtMi4wMDMtLjY3OHoiIGZpbGw9InVybCgjbG9iZS1pY29ucy1nZW1pbmktMi1fUl8wXykiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsb2JlLWljb25zLWdlbWluaS0wLV9SXzBfIiB4MT0iNyIgeDI9IjExIiB5MT0iMTUuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjMDhCOTYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhCOTYyIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTEtX1JfMF8iIHgxPSI4IiB4Mj0iMTEuNSIgeTE9IjUuNSIgeTI9IjExIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk0NTQzIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk0NTQzIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImxvYmUtaWNvbnMtZ2VtaW5pLTItX1JfMF8iIHgxPSIzLjUiIHgyPSIxNy41IiB5MT0iMTMuNSIgeTI9IjEyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkFCQzEyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiNGQUJDMTIiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",
  "deepseek": "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGVlcFNlZWs8L3RpdGxlPjxwYXRoIGQ9Ik0yMy43NDggNC42NTFjLS4yNTQtLjEyNC0uMzY0LjExMy0uNTEyLjIzMy0uMDUxLjA0LS4wOTQuMDktLjEzNy4xMzctLjM3Mi4zOTctLjgwNi42NTctMS4zNzMuNjI2LS44MjktLjA0Ni0xLjUzNy4yMTQtMi4xNjMuODQ4LS4xMzMtLjc4Mi0uNTc1LTEuMjQ4LTEuMjQ3LTEuNTQ4LS4zNTItLjE1NS0uNzA4LS4zMTEtLjk1NS0uNjUtLjE3Mi0uMjQtLjIxOS0uNTA5LS4zMDUtLjc3NC0uMDU1LS4xNi0uMTEtLjMyMy0uMjkzLS4zNS0uMi0uMDMxLS4yNzguMTM2LS4zNTYuMjc2LS4zMTMuNTcyLS40MzQgMS4yMDItLjQyMiAxLjg0LjAyNyAxLjQzNi42MzMgMi41OCAxLjgzOCAzLjM5My4xMzcuMDk0LjE3Mi4xODcuMTI5LjMyMy0uMDgyLjI4LS4xOC41NTMtLjI2Ni44MzMtLjA1NS4xNzktLjEzNy4yMTgtLjMyOC4xNGE1LjUgNS41IDAgMCAxLTEuNzM3LTEuMTc5Yy0uODU3LS44MjgtMS42MzEtMS43NDMtMi41OTctMi40NmExMiAxMiAwIDAgMC0uNjg5LS40N2MtLjk4NS0uOTU3LjEzLTEuNzQzLjM4Ny0xLjgzNi4yNy0uMDk4LjA5NC0uNDMzLS43NzgtLjQyOC0uODcyLjAwMy0xLjY3LjI5NS0yLjY4Ny42ODVhMyAzIDAgMCAxLS40NjUuMTM2IDkuNiA5LjYgMCAwIDAtMi44ODMtLjEwMWMtMS44ODUuMjEtMy4zOSAxLjEtNC40OTcgMi42MjJDLjA4MiA4Ljc3Ni0uMjMxIDEwLjg1NC4xNTIgMTMuMDJjLjQwMyAyLjI4NCAxLjU2OCA0LjE3NSAzLjM2IDUuNjUzIDEuODU3IDEuNTMzIDMuOTk3IDIuMjg0IDYuNDM4IDIuMTQgMS40ODItLjA4NSAzLjEzMi0uMjg0IDQuOTk0LTEuODYuNDcuMjM0Ljk2Mi4zMjggMS43OC4zOTguNjI5LjA1OCAxLjIzNS0uMDMxIDEuNzA1LS4xMjkuNzM1LS4xNTUuNjg0LS44MzYuNDE4LS45NjEtMi4xNTUtMS4wMDQtMS42ODItLjU5NS0yLjExMi0uOTI2IDEuMDk1LTEuMjk1IDIuNzY4LTMuNTk4IDMuMjg0LTYuNzMzLjA1LS4zNDYuMTE1LS44MzQuMTA4LTEuMTE0LS4wMDQtLjE3MS4wMzUtLjIzOC4yMy0uMjU3YTQuMiA0LjIgMCAwIDAgMS41NDUtLjQ3NWMxLjM5Ny0uNzYzIDEuOTYtMi4wMTYgMi4wOTMtMy41MTcuMDItLjIzLS4wMDQtLjQ2Ny0uMjQ3LS41ODhNMTEuNTggMTguMTY4Yy0yLjA4OC0xLjY0Mi0zLjEwMS0yLjE4My0zLjUyLTIuMTYtLjM5LjAyNC0uMzIuNDcyLS4yMzQuNzYzLjA5LjI4OC4yMDcuNDg3LjM3MS43NC4xMTQuMTY3LjE5Mi40MTYtLjExMy42MDMtLjY3My40MTYtMS44NDItLjE0LTEuODk3LS4xNjgtMS4zNjEtLjgwMS0yLjUtMS44Ni0zLjMwMS0zLjMwNi0uNzc1LTEuMzkzLTEuMjI1LTIuODg4LTEuMjk5LTQuNDgyLS4wMi0uMzg1LjA5NC0uNTIyLjQ3Ny0uNTkyYTQuNyA0LjcgMCAwIDEgMS41My0uMDM4YzIuMTMxLjMxMSAzLjk0NiAxLjI2NCA1LjQ2NyAyLjc3NC44NjguODYgMS41MjUgMS44ODcgMi4yMDIgMi44OS43MiAxLjA2NiAxLjQ5NCAyLjA4MiAyLjQ4IDIuOTE1LjM0OC4yOTEuNjI2LjUxMy44OTIuNjc3LS44MDIuMDktMi4xNC4xMDktMy4wNTUtLjYxNXptMS4wMDEtNi40NGEuMzA2LjMwNiAwIDAgMSAuNDE1LS4yODcuMy4zIDAgMCAxIC4xMTMuMDc0LjMuMyAwIDAgMSAuMDg2LjIxNGMwIC4xNy0uMTM2LjMwNy0uMzA4LjMwN2EuMzAzLjMwMyAwIDAgMS0uMzA2LS4zMDdtMy4xMSAxLjU5NmMtLjIuMDgxLS40LjE1MS0uNTkxLjE2YTEuMjUgMS4yNSAwIDAgMS0uNzk4LS4yNTRjLS4yNzQtLjIzLS40Ny0uMzU4LS41NTEtLjc1OGExLjcgMS43IDAgMCAxIC4wMTUtLjU4OGMuMDctLjMyNy0uMDA3LS41MzctLjIzOC0uNzI3LS4xODgtLjE1Ni0uNDI2LS4xOTktLjY4OS0uMTk5YS42LjYgMCAwIDEtLjI1NC0uMDc4LjI1My4yNTMgMCAwIDEtLjExNC0uMzU4IDEgMSAwIDAgMSAuMTkyLS4yMWMuMzU2LS4yMDIuNzY3LS4xMzYgMS4xNDYuMDE2LjM1Mi4xNDQuNjE4LjQwOCAxLjAwMS43ODIuMzkyLjQ1MS40NjIuNTc2LjY4NS45MTUuMTc2LjI2NC4zMzYuNTM2LjQ0Ni44NDguMDY2LjE5NC0uMDIuMzUzLS4yNS40NSIvPjwvc3ZnPg=="
};
const modelProviderNames: Record<ModelProvider, string> = { claude: "Claude", openai: "OpenAI", gemini: "Gemini", deepseek: "DeepSeek" };
function modelProvider(name: string, provider = ""): ModelProvider | undefined {
  const explicit = provider.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  if (provider.trim()) {
    const providers: Record<string, ModelProvider> = {
      anthropic: "claude", claude: "claude", claudecode: "claude",
      openai: "openai", google: "gemini", googlegemini: "gemini", googleaistudio: "gemini", gemini: "gemini",
      deepseek: "deepseek",
    };
    return providers[explicit];
  }
  const value = name.trim().toLowerCase();
  if (/^(?:anthropic\/)?claude(?:$|[\s-])/.test(value)) return "claude";
  if (/^(?:openai\/)?(?:gpt[-\s]?\d|chatgpt(?:$|[\s-])|o[134](?:$|[\s-]))/.test(value)) return "openai";
  if (/^(?:google\/)?gemini(?:$|[\s-])/.test(value)) return "gemini";
  if (/^deepseek(?:$|[\s-])/.test(value)) return "deepseek";
  return undefined;
}
const ProviderLogo = defineComponent({
  props: {
    model: { type: String, default: "" }, provider: { type: String, default: "" },
    size: { type: Number, default: 20 },
  },
  setup: props => () => {
    const provider = modelProvider(props.model, props.provider);
    const monochrome = provider !== "gemini";
    const markSize = Math.round(props.size * (provider === "openai" ? .82 : .58));
    return h("span", {
      class: ["model-provider-mark", { "is-color": provider && !monochrome }],
      "data-provider-logo": provider ?? "unknown", "aria-hidden": "true",
      title: provider ? `${modelProviderNames[provider]} logo` : "Custom model",
      style: {
        display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        width: `${props.size}px`, height: `${props.size}px`, boxSizing: "border-box",
        border: "1px solid var(--provider-logo-border, #e5e5e8)",
        borderRadius: `${props.size >= 28 ? 9 : props.size >= 20 ? 6 : 4}px`,
        background: "var(--provider-logo-surface, #fff)", color: "var(--provider-logo-muted, #a1a1aa)",
      },
    }, provider ? [h("img", {
      src: modelProviderAssets[provider], alt: "", "aria-hidden": "true",
      class: ["model-provider-image", { "is-monochrome": monochrome }],
      "data-logo-source": "bundled-brand-asset",
      style: { display: "block", objectFit: "contain", width: `${markSize}px`, height: `${markSize}px` },
    })] : [h(Cpu, { size: Math.round(props.size * .5), strokeWidth: 1.7, "aria-hidden": "true" })]);
  },
});

export interface ConversationAttachment {
  id?: string;
  name: string;
  mimeType?: string;
  url?: string;
}
export interface ConversationTool {
  id: string;
  title: string;
  status?: "pending" | "running" | "success" | "failed";
  summary?: string;
  input?: string;
  output?: string;
}
export type ConversationPart =
  | { kind: "thought" | "message"; id?: string; text: string }
  | (ConversationTool & { kind: "tool" });
export interface ConversationMessage {
  id: string;
  role: "user" | "assistant" | "system";
  text?: string;
  /** Ordered process and response parts. text is a fallback when parts contain no message. */
  parts?: ConversationPart[];
  attachments?: ConversationAttachment[];
  streaming?: boolean;
  interrupted?: boolean;
  error?: string;
  actions?: { id: string; label: string; kind?: "preview"; disabled?: boolean }[];
}
const props = withDefaults(defineProps<{
  /** Omit for the local example. Supplying messages makes the transcript fully controlled. */
  messages?: ConversationMessage[];
  modelValue?: string;
  model?: string;
  models?: string[];
  busy?: boolean;
  disabled?: boolean;
  sessionKey?: string;
  placeholder?: string;
  error?: string;
  accept?: string;
}>(), {
  models: () => ["Claude Sonnet 4.6", "GPT-5.4", "Gemini 3.1 Pro"],
  busy: false,
  disabled: false,
  sessionKey: "",
  placeholder: "Message…",
  error: "",
  accept: "",
});
const emit = defineEmits<{
  send: [message: { text: string; model: string; files: File[] }];
  stop: [];
  "update:modelValue": [value: string];
  "update:model": [value: string];
  "message-action": [action: { messageId: string; actionId: string }];
}>();
const exampleMessages: ConversationMessage[] = [
  { id: "example-user-1", role: "user", text: "Check the typography on the homepage." },
  {
    id: "example-assistant-1", role: "assistant",
    parts: [
      { kind: "thought", text: "Check the hierarchy, type sizes, and contrast." },
      { kind: "tool", id: "read-page", title: "Read page styles", status: "success", input: "src/styles.css", output: "Read the heading, body, and supporting text styles." },
      { kind: "message", text: "Use three levels: headings, body text, and supporting details.\n\nKeep the body readable, then refine the space between headings and paragraphs." },
    ],
  },
  { id: "example-user-2", role: "user", text: "Keep body text at 15px and supporting text at 12px or above." },
];
const localMessages = ref<ConversationMessage[]>(exampleMessages);
const localDraft = ref("");
const localModel = ref(props.models[0] ?? "");
const draft = computed({
  get: () => props.modelValue ?? localDraft.value,
  set: (value: string) => {
    if (props.modelValue === undefined) localDraft.value = value;
    emit("update:modelValue", value);
  },
});
const selectedModel = computed(() => props.model ?? localModel.value);
const messages = computed(() => props.messages ?? localMessages.value);
const working = computed(() => props.busy || messages.value.some(message => message.streaming));
const textarea = ref<HTMLTextAreaElement | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);
const scroller = ref<HTMLElement | null>(null);
const transcript = ref<HTMLElement | null>(null);
const followBottom = ref(true);
const awayFromBottom = ref(false);
const scrolling = ref(false);
const composing = ref(false);
const menuOpen = ref(false);
const modelRoot = ref<HTMLElement | null>(null);
const modelTrigger = ref<HTMLButtonElement | null>(null);
const previewDialog = ref<HTMLDialogElement | null>(null);
const preview = ref<{ url: string; name: string } | null>(null);
const instanceId = `conversation-${useId().replace(/:/g, "")}`;
const expanded = ref<Record<string, boolean>>({});
interface PendingFile { id: string; file: File; url?: string }
const pendingFiles = ref<PendingFile[]>([]);
const objectUrls = new Set<string>();
let sequence = 0;
let scrollFrame = 0;
let resizeObserver: ResizeObserver | undefined;
let disposed = false;
let submitting = false;
let followPaused = false;
let scrollingTimer: ReturnType<typeof setTimeout> | undefined;
let arrivalMotion: MediaQueryList | undefined;
const arrivals = new Set<Animation>();
function stopArrivals() {
  arrivals.forEach(animation => animation.cancel());
  arrivals.clear();
}
function arrivalVisibility() { if (document.hidden) stopArrivals(); }
function arrivalPreference() { if (arrivalMotion?.matches) stopArrivals(); }
watch(() => messages.value.map(message => `${message.role}:${message.id}`), (current, previous) => {
  if (!arrivalMotion || arrivalMotion.matches || document.hidden) return;
  const earlier = new Set(previous);
  const newUsers = new Set(current.filter(key => key.startsWith("user:") && !earlier.has(key)).map(key => key.slice(5)));
  if (!newUsers.size) return;
  void nextTick(() => {
    if (disposed || arrivalMotion?.matches || document.hidden) return;
    transcript.value?.querySelectorAll<HTMLElement>(".message-user").forEach(message => {
      if (!newUsers.has(message.dataset.messageId ?? "")) return;
      const bubble = message.querySelector<HTMLElement>(".user-bubble");
      if (!bubble) return;
      const animation = bubble.animate([
        { transform: "translate3d(0, 18px, 0)", opacity: 0 },
        { transform: "none", opacity: 1 },
      ], { duration: 360, easing: "cubic-bezier(.16,1,.3,1)" });
      animation.id = "message-send-arrival";
      arrivals.add(animation);
      animation.onfinish = () => { arrivals.delete(animation); };
      animation.oncancel = () => { arrivals.delete(animation); };
    });
  });
});

// Build a small, safe chat prose renderer from text nodes, never raw HTML.
function linkUrl(value: string) {
  try {
    const parsed = new URL(value, "https://component.invalid");
    return ["http:", "https:", "mailto:"].includes(parsed.protocol) ? value : undefined;
  } catch { return undefined; }
}
function inline(text: string, depth = 0): VNodeChild[] {
  if (depth > 4) return [text];
  const nodes: VNodeChild[] = [];
  const pattern = /`([^`\n]+)`|\[([^\]\n]+)\]\(([^\s)]+)\)|\*\*([^*\n]+)\*\*|\*([^*\n]+)\*/g;
  let start = 0;
  for (const match of text.matchAll(pattern)) {
    nodes.push(text.slice(start, match.index));
    if (match[1] !== undefined) nodes.push(h("code", match[1]));
    else if (match[2] !== undefined) {
      const href = linkUrl(match[3]!);
      nodes.push(h(href ? "a" : "span", href ? { href, target: "_blank", rel: "noopener noreferrer" } : {}, inline(match[2], depth + 1)));
    } else nodes.push(h(match[4] !== undefined ? "strong" : "em", inline(match[4] ?? match[5] ?? "", depth + 1)));
    start = match.index! + match[0].length;
  }
  nodes.push(text.slice(start));
  return nodes;
}
function prose(text: string): VNodeChild[] {
  const lines = text.replace(/\r\n?/g, "\n").split("\n");
  const nodes: VNodeChild[] = [];
  let index = 0;
  const special = (line: string) => /^(?:\s*```|#{1,4}\s|\s*[-*+]\s|\s*\d+\.\s|>\s?)/.test(line);
  while (index < lines.length) {
    const line = lines[index]!;
    if (!line.trim()) { index++; continue; }
    if (/^\s*```/.test(line)) {
      const code: string[] = [];
      index++;
      while (index < lines.length && !/^\s*```/.test(lines[index]!)) code.push(lines[index++]!);
      index++;
      nodes.push(h("pre", [h("code", code.join("\n"))]));
    } else if (/^#{1,4}\s/.test(line)) {
      const heading = line.match(/^(#{1,4})\s+(.*)$/)!;
      nodes.push(h(`h${heading[1]!.length}`, inline(heading[2]!)));
      index++;
    } else if (/^\s*(?:[-*+]|\d+\.)\s/.test(line)) {
      const ordered = /^\s*\d+\./.test(line);
      const items: VNodeChild[] = [];
      const pattern = ordered ? /^\s*\d+\.\s+(.*)$/ : /^\s*[-*+]\s+(.*)$/;
      while (index < lines.length && pattern.test(lines[index]!)) items.push(h("li", inline(lines[index++]!.replace(pattern, "$1"))));
      const start = ordered ? Number(line.match(/^\s*(\d+)/)?.[1] ?? 1) : undefined;
      nodes.push(h(ordered ? "ol" : "ul", ordered ? { start } : {}, items));
    } else if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index]!)) quote.push(lines[index++]!.replace(/^>\s?/, ""));
      nodes.push(h("blockquote", inline(quote.join("\n"))));
    } else {
      const paragraph = [line];
      index++;
      while (index < lines.length && lines[index]!.trim() && !special(lines[index]!)) paragraph.push(lines[index++]!);
      nodes.push(h("p", inline(paragraph.join("\n"))));
    }
  }
  return nodes;
}
const ChatText = defineComponent({
  props: { text: { type: String, default: "" } },
  setup: props => () => h("div", { class: "conversation-prose" }, prose(props.text)),
});
// These glyphs and the busy cue use the source chat controls' geometry.
const ChatGlyph = defineComponent({
  props: { name: { type: String, required: true }, size: { type: Number, default: 18 } },
  setup: props => () => h("svg", {
    class: ["chat-glyph", `glyph-${props.name}`], width: props.size, height: props.size,
    viewBox: "0 0 24 24", fill: props.name === "stop" ? "currentColor" : "none",
    stroke: props.name === "stop" ? "none" : "currentColor", "stroke-width": props.name === "stop" ? undefined : 1.7,
    "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true",
  }, [h("g", { class: "glyph-motion" }, props.name === "send"
    ? [h("path", { d: "M12 18V6m-6 6 6-6 6 6" })]
    : props.name === "stop"
      ? [h("rect", { x: 3.75, y: 3.75, width: 16.5, height: 16.5, rx: 3 })]
      : [h("path", { d: "M12 3A9 9 0 1 1 3 12" }), h("circle", { cx: 3, cy: 12, r: 1.65, fill: "currentColor", stroke: "none" })])]),
});
const ThinkingCue = defineComponent({
  setup: () => () => h("span", { class: "thinking-busy" }, [
    h("span", { class: "thinking-lamp", "aria-hidden": "true" }, [h("span", { class: "thinking-lamp-halo" }), h("span", { class: "thinking-lamp-core" })]),
    h("span", { class: "thinking-sheen" }, "Thinking…"),
  ]),
});

type TextBlock = { kind: "message"; key: string; text: string } | { kind: "thought"; key: string; text: string };
type ToolBlock = { kind: "tools"; key: string; tools: ConversationTool[] };
type Block = TextBlock | ToolBlock;
const messageViews = computed(() => messages.value.map(message => {
  const prefix = encodeURIComponent(message.id);
  const parts: ConversationPart[] = [...(message.parts ?? [])];
  if (message.text && !parts.some(part => part.kind === "message")) parts.push({ kind: "message", text: message.text });
  const blocks: Block[] = [];
  for (const [index, part] of parts.entries()) {
    if (part.kind === "tool") {
      const previous = blocks[blocks.length - 1];
      if (previous?.kind === "tools") previous.tools.push(part);
      else blocks.push({ kind: "tools", key: `${prefix}-tools-${index}`, tools: [part] });
    } else if (part.text) blocks.push({ kind: part.kind, key: `${prefix}-${part.kind}-${encodeURIComponent(part.id ?? String(index))}`, text: part.text });
  }
  let lastMessage = -1;
  for (let index = blocks.length - 1; index >= 0; index--) if (blocks[index]?.kind === "message") { lastMessage = index; break; }
  const settled = !message.streaming;
  const work = blocks.filter((_, index) => index !== lastMessage);
  const response = blocks[lastMessage];
  const tail = blocks[blocks.length - 1];
  return {
    message, prefix, tailKey: tail?.key,
    // Keys and the final response DOM survive the transition from streaming to settled.
    blocks: settled ? [...work, ...(response ? [response] : [])] : blocks,
    processKey: `${prefix}-process`,
    workKeys: new Set(work.map(block => block.key)),
    responseKey: response?.key,
    outputKey: message.streaming && tail?.kind === "message" ? tail.key : undefined,
    failures: parts.filter(part => part.kind === "tool" && part.status === "failed").length,
  };
}));
const validFoldKeys = computed(() => {
  const keys = new Set<string>();
  for (const view of messageViews.value) {
    if (view.workKeys.size) keys.add(view.processKey);
    for (const block of view.blocks) {
      keys.add(block.key);
      if (block.kind === "tools") for (const tool of block.tools) if (hasDetails(tool)) keys.add(toolKey(block, tool));
    }
  }
  return keys;
});
watch(validFoldKeys, keys => {
  expanded.value = Object.fromEntries(Object.entries(expanded.value).filter(([key]) => keys.has(key)));
});
function isOpen(key: string, defaultOpen = false) { return expanded.value[key] ?? defaultOpen; }
function panelId(key: string) { return `${instanceId}-${key}`; }
function toggle(key: string, defaultOpen = false) {
  const panel = document.getElementById(panelId(key));
  if (panel) snapshots.set(panel, panel.getBoundingClientRect().height);
  expanded.value = { ...expanded.value, [key]: !isOpen(key, defaultOpen) };
  // Opening an earlier process is a request to read it, not to follow streaming output.
  followPaused = true;
  followBottom.value = false;
}
function toolKey(block: ToolBlock, tool: ConversationTool) { return `${block.key}-tool-${encodeURIComponent(tool.id)}`; }
function hasDetails(tool: ConversationTool) { return Boolean(tool.input || tool.output); }
function toolState(tool: ConversationTool, busy = false) {
  if (tool.status === "failed") return "failed";
  return busy && (tool.status === "running" || tool.status === "pending") ? "running" : "done";
}
function toolStatus(tool: ConversationTool, busy = false) { return { running: "Running", failed: "Failed", done: "Done" }[toolState(tool, busy)]; }
function activateMessageAction(message: ConversationMessage, action: { id: string; disabled?: boolean }) {
  if (props.disabled || action.disabled) return;
  followPaused = true;
  followBottom.value = false;
  emit("message-action", { messageId: message.id, actionId: action.id });
}
function groupState(block: ToolBlock, busy = false) {
  if (block.tools.some(tool => toolState(tool, busy) === "running")) return "running";
  return block.tools.some(tool => toolState(tool, busy) === "failed") ? "failed" : "done";
}
function groupContext(block: ToolBlock, busy = false) {
  const current = [...block.tools].reverse().find(tool => toolState(tool, busy) === "running");
  if (current) return [current.title, current.summary].filter(Boolean).join(" · ");
  const names = [...new Set(block.tools.map(tool => tool.title))];
  return names.slice(0, 3).join(" · ") + (names.length > 3 ? " …" : "");
}

const snapshots = new WeakMap<Element, number>();
watch(() => messages.value.map(message => [message.id, !!message.streaming] as const), (current, previous) => {
  const wasStreaming = new Map(previous);
  for (const [id, streaming] of current) {
    if (streaming || !wasStreaming.get(id)) continue;
    const view = messageViews.value.find(view => view.message.id === id);
    if (!view || isOpen(view.processKey, !!view.message.interrupted)) continue;
    // Settled thoughts become plain text. Capture the live shell before that patch,
    // so a previously closed summary cannot briefly grow to its full text height.
    for (const key of view.workKeys) {
      const panel = document.getElementById(panelId(`${key}-shell`));
      if (panel) snapshots.set(panel, panel.getBoundingClientRect().height);
    }
  }
}, { flush: "pre" });
function beforeEnter(element: Element) {
  const panel = element as HTMLElement;
  panel.removeAttribute("inert");
  panel.style.height = `${snapshots.get(element) ?? panel.getBoundingClientRect().height}px`;
}
function enter(element: Element) {
  const panel = element as HTMLElement;
  void panel.offsetHeight;
  panel.style.height = `${panel.scrollHeight}px`;
  snapshots.delete(element);
}
function clearHeight(element: Element) { (element as HTMLElement).style.removeProperty("height"); }
function freezeFold(element: Element) {
  const panel = element as HTMLElement;
  const height = getComputedStyle(panel).display === "none" ? snapshots.get(element) ?? 0 : panel.getBoundingClientRect().height;
  snapshots.set(element, height);
  panel.style.height = `${height}px`;
}
function leave(element: Element) {
  const panel = element as HTMLElement;
  panel.setAttribute("inert", "");
  panel.style.height = `${snapshots.get(element) ?? panel.getBoundingClientRect().height}px`;
  snapshots.delete(element);
  void panel.offsetHeight;
  panel.style.height = "0px";
}

function onScroll() {
  const element = scroller.value;
  if (!element) return;
  awayFromBottom.value = element.scrollHeight - element.scrollTop - element.clientHeight >= 80;
  followBottom.value = !followPaused && !awayFromBottom.value;
  if (scrolling.value) showScrollbar();
}
function showScrollbar() {
  scrolling.value = true;
  clearTimeout(scrollingTimer);
  scrollingTimer = setTimeout(() => { scrolling.value = false; }, 650);
}
function userScroll() { followPaused = false; showScrollbar(); }
function scrollbarPointer(event: PointerEvent) {
  if (event.target === scroller.value) userScroll();
}
function scrollKey(event: KeyboardEvent) {
  if (event.target === scroller.value && !event.ctrlKey && !event.altKey && !event.metaKey && ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) userScroll();
}
function onLayout() {
  const element = scroller.value;
  if (element) awayFromBottom.value = element.scrollHeight - element.scrollTop - element.clientHeight >= 80;
  scheduleScroll();
}
function scheduleScroll() {
  if (disposed || followPaused || !followBottom.value || scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    if (!disposed && !followPaused && followBottom.value && scroller.value) scroller.value.scrollTop = scroller.value.scrollHeight;
  });
}
function scrollToBottom() {
  followPaused = false;
  followBottom.value = true;
  void nextTick(scheduleScroll);
}
function autoGrow() {
  const element = textarea.value;
  if (!element) return;
  element.style.height = "auto";
  element.style.height = `${Math.min(Math.max(element.scrollHeight, 40), 128)}px`;
}
watch(draft, () => nextTick(autoGrow));
watch(messages, () => nextTick(scheduleScroll), { deep: true });
watch(working, () => nextTick(scheduleScroll));
const canSend = computed(() => !props.disabled && !working.value && Boolean(draft.value.trim() || pendingFiles.value.length) && (!props.models.length || props.models.includes(selectedModel.value)));
function updateDraft(event: Event) {
  if (!props.disabled) draft.value = (event.target as HTMLTextAreaElement).value;
}
function send() {
  if (!canSend.value || composing.value || submitting) return;
  submitting = true;
  const text = draft.value.trim();
  const files = pendingFiles.value.map(item => item.file);
  if (props.messages === undefined) {
    localMessages.value = [...localMessages.value, {
      id: `${instanceId}-user-${++sequence}`, role: "user", text,
      attachments: pendingFiles.value.map(item => ({ id: item.id, name: item.file.name, mimeType: item.file.type, url: item.url })),
    }];
  } else for (const item of pendingFiles.value) if (item.url) releaseUrl(item.url);
  draft.value = "";
  pendingFiles.value = [];
  emit("send", { text, model: selectedModel.value, files });
  scrollToBottom();
  void nextTick(() => { submitting = false; });
}
function onKeydown(event: KeyboardEvent) {
  if (event.key !== "Enter" || event.shiftKey || event.ctrlKey || event.metaKey || event.altKey || event.isComposing || composing.value || event.keyCode === 229) return;
  event.preventDefault();
  send();
}
function addFiles(files: File[]) {
  if (props.disabled) return;
  const next = [...pendingFiles.value];
  for (const file of files) {
    if (next.some(item => item.file.name === file.name && item.file.size === file.size && item.file.type === file.type && item.file.lastModified === file.lastModified)) continue;
    const url = file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined;
    if (url) objectUrls.add(url);
    next.push({ id: `${instanceId}-file-${++sequence}`, file, url });
  }
  pendingFiles.value = next;
}
function pickFiles(event: Event) {
  const input = event.target as HTMLInputElement;
  addFiles(Array.from(input.files ?? []));
  input.value = "";
}
function pasteFiles(event: ClipboardEvent) {
  if (props.disabled) return;
  const images = Array.from(event.clipboardData?.files ?? []).filter(file => file.type.startsWith("image/"));
  if (images.length) { event.preventDefault(); addFiles(images); }
}
function releaseUrl(url: string) {
  if (preview.value?.url === url) closePreview();
  URL.revokeObjectURL(url);
  objectUrls.delete(url);
}
function removeFile(id: string) {
  if (props.disabled) return;
  const file = pendingFiles.value.find(item => item.id === id);
  if (file?.url) releaseUrl(file.url);
  pendingFiles.value = pendingFiles.value.filter(item => item.id !== id);
}
function imageUrl(attachment: ConversationAttachment) {
  if (!attachment.mimeType?.startsWith("image/") || !attachment.url) return undefined;
  return attachmentUrl(attachment) ?? (/^data:image\/(?:png|jpeg|gif|webp|avif|bmp);/i.test(attachment.url) ? attachment.url : undefined);
}
function attachmentUrl(attachment: ConversationAttachment) {
  if (!attachment.url) return undefined;
  try {
    const parsed = new URL(attachment.url, "https://component.invalid");
    return ["http:", "https:", "blob:"].includes(parsed.protocol) ? attachment.url : undefined;
  } catch { return undefined; }
}
async function openPreview(url: string, name: string) {
  preview.value = { url, name };
  await nextTick();
  if (!disposed && previewDialog.value && !previewDialog.value.open) previewDialog.value.showModal();
}
function closePreview() { previewDialog.value?.close(); preview.value = null; }

function closeModels(restoreFocus = false) {
  menuOpen.value = false;
  if (restoreFocus) void nextTick(() => { if (!disposed) modelTrigger.value?.focus({ preventScroll: true }); });
}
function modelButtons() { return [...(modelRoot.value?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]') ?? [])]; }
function focusModel(button?: HTMLButtonElement) {
  if (!button) return;
  button.focus({ preventScroll: true });
  const menu = button.parentElement;
  if (!menu) return;
  if (button.offsetTop < menu.scrollTop) menu.scrollTop = button.offsetTop;
  else if (button.offsetTop + button.offsetHeight > menu.scrollTop + menu.clientHeight) menu.scrollTop = button.offsetTop + button.offsetHeight - menu.clientHeight;
}
async function openModels() {
  if (props.disabled || !props.models.length) return;
  menuOpen.value = true;
  await nextTick();
  if (!disposed && menuOpen.value) focusModel(modelButtons().find(button => button.getAttribute("aria-checked") === "true") ?? modelButtons()[0]);
}
function selectModel(model: string) {
  if (props.disabled || !props.models.includes(model)) return;
  if (props.model === undefined) localModel.value = model;
  emit("update:model", model);
  closeModels(true);
}
async function onModelKeydown(event: KeyboardEvent) {
  if (event.isComposing || props.disabled || event.ctrlKey || event.altKey || event.metaKey) return;
  if (event.key === "Escape" && menuOpen.value) { event.preventDefault(); event.stopPropagation(); closeModels(true); return; }
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  if (!menuOpen.value) { await openModels(); return; }
  const options = modelButtons();
  if (!options.length) return;
  const current = options.indexOf(document.activeElement as HTMLButtonElement);
  const index = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : (current + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length;
  focusModel(options[index]);
}
function outsideModels(event: PointerEvent) { if (!modelRoot.value?.contains(event.target as Node)) closeModels(); }
function leaveModels(event: FocusEvent) { if (!modelRoot.value?.contains(event.relatedTarget as Node | null)) closeModels(); }
watch(() => props.models, models => {
  if (props.model === undefined && !models.includes(localModel.value)) localModel.value = models[0] ?? "";
  closeModels();
}, { deep: true });
watch(() => props.model, (model, previous) => {
  if (model === undefined && previous !== undefined) localModel.value = props.models.includes(previous) ? previous : props.models[0] ?? "";
});
watch(() => props.disabled, disabled => { if (disabled) closeModels(); });
watch(() => props.sessionKey, () => {
  draft.value = "";
  for (const url of [...objectUrls]) releaseUrl(url);
  pendingFiles.value = [];
  localMessages.value = [];
  expanded.value = {};
  closeModels();
  composing.value = false;
  scrollToBottom();
});
onMounted(() => {
  arrivalMotion = matchMedia("(prefers-reduced-motion: reduce)");
  arrivalMotion.addEventListener("change", arrivalPreference);
  document.addEventListener("visibilitychange", arrivalVisibility);
  document.addEventListener("pointerdown", outsideModels);
  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(onLayout);
    if (transcript.value) resizeObserver.observe(transcript.value);
    if (scroller.value) resizeObserver.observe(scroller.value);
  }
  autoGrow();
  scrollToBottom();
});
onBeforeUnmount(() => {
  disposed = true;
  clearTimeout(scrollingTimer);
  stopArrivals();
  arrivalMotion?.removeEventListener("change", arrivalPreference);
  document.removeEventListener("visibilitychange", arrivalVisibility);
  if (scrollFrame) cancelAnimationFrame(scrollFrame);
  resizeObserver?.disconnect();
  document.removeEventListener("pointerdown", outsideModels);
  for (const url of objectUrls) URL.revokeObjectURL(url);
  objectUrls.clear();
  previewDialog.value?.close();
});
defineExpose({ focus: () => textarea.value?.focus(), scrollToBottom });
</script>

<template>
  <section class="chat-conversation" aria-label="Chat conversation">
    <div class="conversation-body">
      <div ref="scroller" class="conversation-scroller" :data-scrolling="scrolling || undefined" role="region" aria-label="Messages" tabindex="0" @scroll.passive="onScroll" @wheel.passive="userScroll" @touchmove.passive="userScroll" @pointerdown="scrollbarPointer" @keydown="scrollKey">
        <div ref="transcript" class="conversation-transcript">
          <p v-if="!messageViews.length && !working" class="conversation-empty">Start a conversation</p>
          <div class="conversation-message-list">
          <article v-for="view in messageViews" :key="view.message.id" class="conversation-message" :class="`message-${view.message.role}`" :data-message-id="view.message.id" :aria-label="view.message.role === 'user' ? 'User message' : view.message.role === 'assistant' ? 'Assistant message' : 'System message'">
            <template v-if="view.message.role === 'system'"><p class="system-text">{{ view.message.text }}</p></template>
            <template v-else>
              <div v-if="view.message.attachments?.length" class="message-attachments">
                <template v-for="(attachment, index) in view.message.attachments" :key="attachment.id ?? index">
                  <button v-if="imageUrl(attachment)" type="button" class="image-attachment" :aria-label="`Preview ${attachment.name}`" @click="openPreview(imageUrl(attachment)!, attachment.name)"><img :src="imageUrl(attachment)" :alt="attachment.name" loading="lazy" @load="scheduleScroll" /></button>
                  <component :is="attachmentUrl(attachment) ? 'a' : 'span'" v-else class="message-file" :href="attachmentUrl(attachment)" :download="attachmentUrl(attachment) ? attachment.name : undefined" :title="attachment.name"><FileText aria-hidden="true" :size="17" /><span>{{ attachment.name }}</span></component>
                </template>
              </div>
              <div v-if="view.message.role === 'user' && view.message.text" class="user-bubble"><ChatText :text="view.message.text" /></div>
              <template v-else-if="view.message.role === 'assistant'">
                <Transition name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold">
                  <div v-if="!view.message.streaming && view.workKeys.size" class="conversation-fold process-heading">
                    <button type="button" class="process-toggle" :aria-expanded="isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted))" :aria-controls="[...view.workKeys].map(key => panelId(`${key}-shell`)).join(' ')" @click="toggle(view.processKey, !!(view.message.streaming || view.message.interrupted))"><span>Process</span><ChevronRight aria-hidden="true" :size="12" class="process-chevron" :class="{ 'is-open': isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted)) }" /><span v-if="view.failures" class="failed-count">{{ view.failures }} failed</span><span v-if="view.message.interrupted" class="process-meta">Interrupted</span></button>
                  </div>
                </Transition>
                <Transition v-for="block in view.blocks" :key="block.key" name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold">
                  <div v-show="view.message.streaming || !view.workKeys.has(block.key) || isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted))" :id="panelId(`${block.key}-shell`)" class="conversation-fold message-block" :class="{ 'completed-response': !view.message.streaming && view.workKeys.size && block.key === view.responseKey }" :data-block-kind="block.kind" :inert="!view.message.streaming && view.workKeys.has(block.key) && !isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted)) || undefined" :aria-hidden="!view.message.streaming && view.workKeys.has(block.key) && !isOpen(view.processKey, !!(view.message.streaming || view.message.interrupted)) || undefined">
                    <ChatText v-if="block.kind === 'message'" :text="block.text"  />
                    <div v-else-if="block.kind === 'thought'" class="thought-block" :class="{ 'elapsed-thought': !view.message.streaming }">
                      <p v-if="!view.message.streaming" class="thought-text">{{ block.text }}</p>
                      <template v-else>
                        <button type="button" class="detail-toggle thought-toggle" :aria-expanded="isOpen(block.key, block.key === view.tailKey)" :aria-controls="panelId(block.key)" @click="toggle(block.key, block.key === view.tailKey)">
                          <ChatGlyph v-if="block.key === view.tailKey" name="arc" :size="12" class="working-icon" /><Sparkles v-else aria-hidden="true" :size="12" /><span class="thought-title">Thinking process</span><span v-if="block.key === view.tailKey" class="thought-badge">Generating…</span><ChevronDown aria-hidden="true" :size="12" class="disclosure" :class="{ 'is-open': isOpen(block.key, block.key === view.tailKey) }" />
                        </button>
                        <Transition name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="isOpen(block.key, block.key === view.tailKey)" :id="panelId(block.key)" class="conversation-fold" :inert="!isOpen(block.key, block.key === view.tailKey) || undefined" :aria-hidden="!isOpen(block.key, block.key === view.tailKey) || undefined"><p class="thought-text">{{ block.text }}</p></div></Transition>
                      </template>
                    </div>
                    <div v-else class="tools-block" :data-state="groupState(block, !!view.message.streaming)">
                      <button type="button" class="detail-toggle tools-toggle" :aria-expanded="isOpen(block.key)" :aria-controls="panelId(block.key)" @click="toggle(block.key)">
                        <ChatGlyph v-if="groupState(block, !!view.message.streaming) === 'running'" name="arc" :size="12" class="working-icon" /><CircleAlert v-else-if="groupState(block) === 'failed'" aria-hidden="true" :size="12" class="error-icon" /><Check v-else aria-hidden="true" :size="12" />
                        <span class="tools-count">{{ block.tools.length }} tool{{ block.tools.length === 1 ? '' : 's' }} used</span><span v-if="groupState(block, !!view.message.streaming) === 'failed'" class="failed-count">{{ block.tools.filter(tool => tool.status === 'failed').length }} failed</span><span class="tools-context" :class="{ 'running-context': groupState(block, !!view.message.streaming) === 'running' }">{{ groupContext(block, !!view.message.streaming) }}</span><ChevronDown aria-hidden="true" :size="12" class="disclosure" :class="{ 'is-open': isOpen(block.key) }" />
                      </button>
                      <Transition name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="isOpen(block.key)" :id="panelId(block.key)" class="conversation-fold" :inert="!isOpen(block.key) || undefined" :aria-hidden="!isOpen(block.key) || undefined"><ul class="tool-list"><li v-for="tool in block.tools" :key="tool.id" :data-state="toolState(tool, !!view.message.streaming)">
                        <component :is="hasDetails(tool) ? 'button' : 'div'" :type="hasDetails(tool) ? 'button' : undefined" class="tool-row" :aria-expanded="hasDetails(tool) ? isOpen(toolKey(block, tool), tool.status === 'failed') : undefined" :aria-controls="hasDetails(tool) ? panelId(toolKey(block, tool)) : undefined" @click="hasDetails(tool) && toggle(toolKey(block, tool), tool.status === 'failed')">
                          <ChatGlyph v-if="toolState(tool, !!view.message.streaming) === 'running'" name="arc" :size="16" class="working-icon" /><CircleAlert v-else-if="tool.status === 'failed'" aria-hidden="true" :size="16" class="error-icon" /><FileSearch v-else-if="/read|读取/i.test(tool.title)" aria-hidden="true" :size="16" /><Terminal v-else aria-hidden="true" :size="16" /><span class="tool-title" :class="{ 'with-summary': tool.summary }" :title="tool.title">{{ tool.title }}</span><span v-if="tool.summary" class="tool-summary" :title="tool.summary">{{ tool.summary }}</span><span class="tool-status" :class="{ 'error-text': tool.status === 'failed', 'running-context': toolState(tool, !!view.message.streaming) === 'running' }">{{ toolStatus(tool, !!view.message.streaming) }}</span><ChevronDown v-if="hasDetails(tool)" aria-hidden="true" :size="16" class="disclosure" :class="{ 'is-open': isOpen(toolKey(block, tool), tool.status === 'failed') }" />
                        </component>
                        <Transition name="conversation-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="clearHeight" @leave="leave" @after-leave="clearHeight" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="hasDetails(tool) && isOpen(toolKey(block, tool), tool.status === 'failed')" :id="panelId(toolKey(block, tool))" class="conversation-fold" :inert="!isOpen(toolKey(block, tool), tool.status === 'failed') || undefined" :aria-hidden="!isOpen(toolKey(block, tool), tool.status === 'failed') || undefined"><div class="tool-output"><template v-if="tool.input"><span>Input</span><pre>{{ tool.input }}</pre></template><template v-if="tool.output"><span :class="{ 'error-text': tool.status === 'failed' }">Output</span><pre :class="{ 'failed-output': tool.status === 'failed' }">{{ tool.output }}</pre></template></div></div></Transition>
                      </li></ul></div></Transition>
                    </div>
                  </div>
                </Transition>
                <div v-if="view.message.streaming" class="generation-status" :class="{ 'is-outputting': view.outputKey }" role="status"><span v-if="view.outputKey">Writing</span><ThinkingCue v-else /></div>
                <p v-else-if="view.message.interrupted" class="message-status">Stopped</p>
                <p v-if="view.message.error" class="message-error" role="alert">{{ view.message.error }}</p>
              </template>
              <div v-if="view.message.actions?.length" class="message-actions">
                <button v-for="action in view.message.actions" :key="action.id" type="button" class="message-action" :data-message-action="action.id" :disabled="disabled || action.disabled" @click="activateMessageAction(view.message, action)"><PanelRightOpen v-if="action.kind === 'preview'" :size="15" aria-hidden="true" />{{ action.label }}</button>
              </div>
            </template>
          </article>
          </div>
          <div v-if="busy && !messages.some(message => message.streaming)" class="generation-status" role="status"><ThinkingCue /></div>
        </div>
      </div>
      <button v-if="awayFromBottom" type="button" class="jump-latest" aria-label="Jump to latest message" @click="scrollToBottom"><ArrowDown aria-hidden="true" :size="15" /><span>Jump to latest</span></button>
    </div>
    <div class="conversation-bottom">
      <p v-if="error" class="composer-error" role="alert">{{ error }}</p>
      <div v-if="pendingFiles.length" class="pending-attachments">
        <div v-for="item in pendingFiles" :key="item.id" class="pending-file">
          <button v-if="item.url" type="button" class="pending-image" :aria-label="`Preview ${item.file.name}`" @click="openPreview(item.url!, item.file.name)"><img :src="item.url" :alt="item.file.name" /></button><span v-else class="pending-name" :title="item.file.name"><FileText aria-hidden="true" :size="17" /><span>{{ item.file.name }}</span></span>
          <button type="button" class="remove-file" :aria-label="`Remove ${item.file.name}`" :disabled="disabled" @click="removeFile(item.id)"><X aria-hidden="true" :size="12" /></button>
        </div>
      </div>
      <div class="conversation-composer" :class="{ 'is-disabled': disabled }">
        <div class="composer-input-slot"><textarea ref="textarea" :value="draft" rows="1" :placeholder="placeholder" aria-label="Message" :disabled="disabled" @input="updateDraft" @keydown="onKeydown" @compositionstart="composing = true" @compositionend="composing = false" @paste="pasteFiles" /></div>
        <div class="composer-toolbar">
          <button type="button" class="conversation-action attach-action" aria-label="Add attachments" title="Add attachments" :disabled="disabled" @click="fileInput?.click()"><Plus aria-hidden="true" :size="18" /></button>
          <input ref="fileInput" type="file" multiple class="conversation-file-input" :accept="accept || undefined" :disabled="disabled" aria-label="Choose files" @change="pickFiles" />
          <div v-if="models.length" ref="modelRoot" class="conversation-model" @keydown="onModelKeydown" @focusout="leaveModels">
            <button ref="modelTrigger" type="button" class="model-trigger" :disabled="disabled" aria-label="Select model" aria-haspopup="menu" :aria-expanded="menuOpen" :aria-controls="`${instanceId}-models`" @click="menuOpen ? closeModels() : openModels()"><ProviderLogo v-if="selectedModel" :model="selectedModel" /><span class="model-trigger-label">{{ models.includes(selectedModel) ? selectedModel : 'Select model' }}</span><ChevronDown aria-hidden="true" :size="13" class="disclosure" :class="{ 'is-open': menuOpen }" /></button>
            <div v-if="menuOpen" :id="`${instanceId}-models`" class="conversation-model-menu" role="menu" aria-label="Available models"><button v-for="option in models" :key="option" type="button" role="menuitemradio" :aria-checked="selectedModel === option" @click="selectModel(option)"><ProviderLogo :model="option" /><span class="model-option-label">{{ option }}</span><Check aria-hidden="true" v-if="selectedModel === option" :size="14" /></button></div>
          </div>
          <div class="composer-send-actions"><button type="button" class="conversation-action composer-primary" :class="working ? 'stop-action' : 'send-action'" :data-kind="working ? 'stop' : 'send'" :disabled="working ? disabled : !canSend" :aria-label="working ? 'Stop generating' : 'Send message'" :title="working ? 'Stop generating' : 'Send message'" @click="working ? (!disabled && emit('stop')) : send()"><Transition name="primary-icon" mode="out-in"><ChatGlyph :key="working ? 'stop' : 'send'" :name="working ? 'stop' : 'send'" :size="working ? 16 : 18" /></Transition></button></div>
        </div>
      </div>
    </div>
    <dialog ref="previewDialog" class="conversation-image-dialog" aria-label="Image preview" @click.self="closePreview" @close="preview = null"><template v-if="preview"><button type="button" class="close-preview" aria-label="Close image preview" @click="closePreview"><X aria-hidden="true" :size="20" /></button><img :src="preview.url" :alt="preview.name" /><p>{{ preview.name }}</p></template></dialog>
  </section>
</template>

<style scoped>
/* Palette and geometry from the source chat.css / global.css; no demo card skin. */
.chat-conversation {
  --chat-bg: #fff; --chat-base: #fafafb; --chat-fg: #18181b; --chat-muted: #52525b;
  --chat-tertiary: #a1a1aa; --chat-elevated: #f4f4f5; --chat-line: #e5e5e8;
  --chat-strong: #d4d4d8; --chat-accent: #7b61ff; --chat-accent-2: #4f46e5;
  --chat-success: #16a34a; --chat-error: color-mix(in srgb, #dc2626 75%, var(--chat-fg) 25%);
  --chat-inverse-hover: #3f3f46;
  box-sizing: border-box; display: flex; flex-direction: column; width: 100%; max-width: 760px;
  min-width: 0; height: var(--chat-height, 560px); min-height: 360px; color: var(--chat-fg);
  background: var(--chat-bg); color-scheme: light; font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif; text-align: left;
}
:global(html.dark .chat-conversation) {
  --chat-bg: #141417; --chat-base: #0a0a0b; --chat-fg: #ededf0; --chat-muted: #a1a1aa;
  --chat-tertiary: #6e6e78; --chat-elevated: #1c1c21; --chat-line: #26262b; --chat-strong: #36363e;
  --chat-accent-2: #818cf8; --chat-success: #34d399; --chat-inverse-hover: #d4d4d8; color-scheme: dark;
}
.chat-conversation *, .chat-conversation *::before, .chat-conversation *::after { box-sizing: border-box; }
.chat-conversation button, .chat-conversation textarea { font: inherit; }
.chat-conversation button { cursor: pointer; }
.chat-conversation button:disabled { cursor: not-allowed; }
.chat-conversation button:focus-visible, .chat-conversation a:focus-visible, .conversation-scroller:focus-visible { outline: 2px solid color-mix(in srgb, var(--chat-accent) 45%, transparent); outline-offset: 3px; }
.chat-conversation svg { display: block; flex: 0 0 auto; }
.conversation-body { position: relative; display: flex; flex: 1; min-height: 0; }
.conversation-scroller { width: 100%; min-height: 0; overflow-y: auto; overflow-x: hidden; overflow-anchor: none; scrollbar-gutter: stable; scrollbar-width: thin; scrollbar-color: transparent transparent; }
.conversation-scroller:is(:hover, :focus-visible, [data-scrolling]) { scrollbar-color: color-mix(in srgb, var(--chat-muted) 30%, transparent) transparent; }
.conversation-scroller::-webkit-scrollbar { width: 4px; height: 4px; }
.conversation-scroller::-webkit-scrollbar-track, .conversation-scroller::-webkit-scrollbar-corner { background: transparent; }
.conversation-scroller::-webkit-scrollbar-thumb { border: 0; border-radius: 999px; background: transparent; }
.conversation-scroller:is(:hover, :focus-visible, [data-scrolling])::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--chat-muted) 30%, transparent); }
.conversation-scroller::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
@supports selector(::-webkit-scrollbar) {
  .conversation-scroller, .conversation-scroller:is(:hover, :focus-visible, [data-scrolling]) { scrollbar-width: auto; scrollbar-color: auto; }
}
.conversation-transcript { display: flex; flex-direction: column; gap: 28px; min-width: 0; padding: 24px 20px 32px; }
.conversation-message-list { display: flex; flex-direction: column; gap: 28px; min-width: 0; }
.conversation-message { flex: 0 0 auto; min-width: 0; width: 100%; }
.message-user { align-self: flex-end; width: fit-content; max-width: 88%; }
.message-system { text-align: center; }
.system-text, .conversation-empty { margin: 0; color: var(--chat-muted); font-size: 12px; line-height: 1.65; }
.conversation-empty { padding: 48px 0; text-align: center; }
.conversation-prose { min-width: 0; color: var(--chat-fg); font-size: 15px; line-height: 24px; overflow-wrap: anywhere; }
.user-bubble { border: 1px solid transparent; border-radius: 18px 18px 7px 18px; padding: 11px 16px; background: color-mix(in srgb, var(--chat-elevated) 80%, transparent); color: var(--chat-fg); font-size: 15px; line-height: 1.75; overflow-wrap: anywhere; }
.conversation-prose :deep(p) { margin: 0 0 8px; white-space: pre-wrap; }
.conversation-prose :deep(h1), .conversation-prose :deep(h2), .conversation-prose :deep(h3), .conversation-prose :deep(h4) { margin: 1.35em 0 .5em; font-weight: 600; line-height: 1.5; letter-spacing: -.015em; }
.conversation-prose :deep(h1) { font-size: 1.3em; }.conversation-prose :deep(h2) { font-size: 1.15em; }.conversation-prose :deep(h3), .conversation-prose :deep(h4) { font-size: 1em; }
.conversation-prose :deep(strong) { color: var(--chat-fg); font-weight: 600; }
.conversation-prose :deep(ul), .conversation-prose :deep(ol) { margin: 10px 0; padding-left: 1.5em; }.conversation-prose :deep(li + li) { margin-top: 8px; }.conversation-prose :deep(li::marker) { color: var(--chat-muted); }
.conversation-prose :deep(code) { border: 1px solid color-mix(in srgb, var(--chat-line) 60%, transparent); border-radius: 6px; padding: 1px 5px; background: color-mix(in srgb, var(--chat-elevated) 75%, transparent); color: var(--chat-muted); font-family: "SFMono-Regular", Consolas, monospace; font-size: .88em; }
.conversation-prose :deep(pre) { margin: 1em 0; padding: 14px 16px; border: 1px solid var(--chat-line); border-radius: 10px; background: var(--chat-base); overflow-x: auto; font-size: 12px; line-height: 1.75; }
.conversation-prose :deep(pre code) { border: 0; border-radius: 0; padding: 0; background: transparent; color: var(--chat-muted); font-size: inherit; white-space: pre; }
.conversation-prose :deep(a) { color: var(--chat-accent-2); text-decoration-color: color-mix(in srgb, var(--chat-accent) 35%, transparent); text-underline-offset: 3px; }.conversation-prose :deep(a:hover) { text-decoration-color: currentColor; }
.conversation-prose :deep(blockquote) { margin: 1em 0; padding-left: 14px; border-left: 2px solid var(--chat-strong); color: var(--chat-muted); }
.conversation-prose :deep(:first-child) { margin-top: 0; }.conversation-prose :deep(:last-child) { margin-bottom: 0; }
.process-toggle { display: inline-flex; align-items: center; gap: 5px; min-height: 24px; max-width: 100%; margin: 0; padding: 0; border: 0; border-radius: 4px; background: none; color: var(--chat-muted); font-size: 13px !important; line-height: 1; letter-spacing: .01em; }
.process-toggle:hover { color: var(--chat-fg); }.process-chevron { color: var(--chat-muted); }.process-chevron :deep(path) { transform-origin: 12px 12px; transition: transform 160ms; }.process-chevron.is-open :deep(path) { transform: rotate(90deg); }
.completed-response { margin-top: 4px; padding-top: 8px; border-top: 1px solid var(--chat-line); }
.message-block[aria-hidden="false"] { min-width: 0; }
.message-block[data-block-kind="message"]:not(.completed-response) { padding-top: 6px; }
.failed-count, .error-text, .error-icon { color: var(--chat-error); }.process-meta { color: var(--chat-muted); }
.detail-toggle { display: flex; align-items: center; gap: 6px; width: 100%; min-width: 0; height: 22px; min-height: 22px; max-height: 22px; padding: 0 4px; border: 0; border-radius: 4px; background: transparent; color: var(--chat-muted); font-size: 13px !important; line-height: 22px; font-weight: 400 !important; text-align: left; transition: background-color 160ms, color 160ms; }
.detail-toggle > svg:first-child { flex: none; width: 12px; height: 12px; }
.detail-toggle:hover, button.tool-row:hover { background: color-mix(in srgb, var(--chat-elevated) 60%, transparent); color: var(--chat-fg); }
.disclosure { color: var(--chat-tertiary); }.disclosure :deep(path) { transform-origin: 12px 12px; transition: transform 160ms; }.disclosure.is-open :deep(path) { transform: rotate(180deg); }
.conversation-fold { min-width: 0; overflow: hidden; }.conversation-fold-enter-active, .conversation-fold-leave-active { transition: height .28s cubic-bezier(.22,1,.36,1); }
.thought-block, .tools-block { margin: 0 0 2px; }.thought-title { min-width: 0; font-weight: 400; }.thought-badge { flex-shrink: 0; margin-left: auto; padding-left: 8px; color: var(--chat-accent-2); font-size: 11px; font-weight: 400; white-space: nowrap; }
.thought-toggle > svg:last-child { width: 12px; height: 12px; }.thought-text { margin: 2px 0 8px 13px; border-left: 1px solid color-mix(in srgb, var(--chat-line) 80%, transparent); padding: 2px 6px 6px 15px; color: var(--chat-muted); font-size: 13px; line-height: 1.6; white-space: pre-wrap; overflow-wrap: anywhere; }
.elapsed-thought { margin-top: 14px; }.elapsed-thought .thought-text { margin: 0 0 8px; border: 0; padding: 0; color: var(--chat-tertiary); }
.tools-count { flex-shrink: 0; font-weight: 400; }.tools-context { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.running-context { color: var(--chat-accent-2); }
.tool-list { min-width: 0; margin: 3px 0 0 13px; border-left: 1px solid color-mix(in srgb, var(--chat-line) 80%, transparent); padding: 0 0 2px 15px; list-style: none; }
.tool-row { display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 30px; padding: 4px; border: 0; border-radius: 6px; color: var(--chat-muted); background: transparent; font-size: 12px !important; line-height: 1.65; text-align: left; transition: background-color 160ms, color 160ms; }
.tool-title { min-width: 0; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.tool-title.with-summary { flex: 0 1 auto; max-width: 44%; }.tool-summary { min-width: 0; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: "SFMono-Regular", Consolas, monospace; font-size: 11px; }.tool-status { flex-shrink: 0; font-size: 11px; }
.tool-output { display: flex; flex-direction: column; gap: 3px; min-width: 0; margin: 2px 0 10px 28px; font-size: 11px; font-weight: 500; color: var(--chat-muted); }
.tool-output pre { max-height: 240px; margin: 0 0 9px; overflow: auto; padding-block: 2px; white-space: pre-wrap; overflow-wrap: anywhere; color: var(--chat-muted); font-family: "SFMono-Regular", Consolas, monospace; font-size: 12px; font-weight: 400; line-height: 1.75; }.tool-output pre.failed-output { border-left: 2px solid color-mix(in srgb, #dc2626 45%, transparent); padding-left: 12px; }
.working-icon { color: var(--chat-accent-2); }.working-icon :deep(.glyph-motion) { transform-origin: 12px 12px; animation: chat-arc-spin 1.15s linear infinite; }@keyframes chat-arc-spin { to { transform: rotate(360deg); } }
.generation-status { display: inline-flex; align-items: center; gap: 8px; margin-top: 4px; color: color-mix(in srgb, var(--chat-muted) 82%, transparent); font-size: 13px; line-height: 22px; }.generation-status.is-outputting { color: color-mix(in srgb, var(--chat-muted) 75%, transparent); }
.generation-status:not(.is-outputting) { min-height: 22px; padding-inline: 4px; }
.generation-status :deep(.thinking-busy) { display: inline-flex; align-items: center; gap: 6px; min-width: 0; font-size: 13px; font-weight: 400; line-height: 22px; }
.generation-status :deep(.thinking-lamp) { position: relative; flex: none; width: 12px; height: 12px; color: var(--chat-accent-2); overflow: visible; }
.generation-status :deep(.thinking-lamp-core), .generation-status :deep(.thinking-lamp-halo) { position: absolute; left: 50%; top: 50%; width: 4px; height: 4px; margin: -2px 0 0 -2px; border-radius: 50%; box-sizing: border-box; }
.generation-status :deep(.thinking-lamp-core) { background: currentColor; animation: chat-lamp-core .8s ease-in-out infinite; }.generation-status :deep(.thinking-lamp-halo) { border: 1px solid currentColor; animation: chat-lamp-halo .8s ease-out infinite; }
.generation-status :deep(.thinking-sheen) { min-width: 0; color: color-mix(in srgb, var(--chat-muted) 82%, transparent); -webkit-text-fill-color: color-mix(in srgb, var(--chat-muted) 82%, transparent); }
@supports ((-webkit-background-clip: text) or (background-clip: text)) { .generation-status :deep(.thinking-sheen) { background-image: linear-gradient(100deg, color-mix(in srgb, var(--chat-muted) 82%, transparent) 0%, color-mix(in srgb, var(--chat-muted) 82%, transparent) 42%, light-dark(rgb(244 244 245 / .98), color-mix(in srgb, var(--chat-muted) 40%, white)) 50%, color-mix(in srgb, var(--chat-muted) 82%, transparent) 58%, color-mix(in srgb, var(--chat-muted) 82%, transparent) 100%); background-size: 220% 100%; background-position: 120% 50%; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: chat-thinking-sheen 1s linear infinite; } }
@keyframes chat-lamp-core { 0%,100% { transform: scale(1); opacity: .6; box-shadow: 0 0 0 0 transparent; } 45% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 2px 0 color-mix(in srgb, var(--chat-accent-2) 35%, transparent); } }@keyframes chat-lamp-halo { 0% { transform: scale(1); opacity: .55; } 100% { transform: scale(2.2); opacity: 0; } }@keyframes chat-thinking-sheen { 0% { background-position: 120% 50%; } 100% { background-position: -20% 50%; } }
.message-status { margin: 8px 0 0; color: var(--chat-muted); font-size: 12px; }.message-error, .composer-error { margin: 8px 0 0; color: var(--chat-error); font-size: 12px; line-height: 1.7; white-space: pre-wrap; overflow-wrap: anywhere; }
.message-actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.message-action { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-height: 36px; padding: 6px 8px; border: 0; border-radius: 6px; background: transparent; color: var(--chat-fg); font-size: 13px !important; font-weight: 500 !important; cursor: pointer; transition: background-color 160ms, color 160ms; }
.message-action:hover:not(:disabled) { background: color-mix(in srgb, var(--chat-accent) 7%, transparent); color: var(--chat-accent-2); }
.message-action:disabled { opacity: .4; }
.jump-latest { position: absolute; bottom: 12px; left: 50%; display: flex; align-items: center; gap: 6px; min-height: 32px; padding: 5px 11px; border: 1px solid var(--chat-line); border-radius: 18px; background: var(--chat-bg); color: var(--chat-fg); box-shadow: 0 3px 12px #00000008; font-size: 12px !important; translate: -50% 0; }
.conversation-bottom { display: flex; flex: 0 0 auto; flex-direction: column; min-width: 0; min-height: 0; max-height: calc(100% - 100px); padding: 12px 20px; }.composer-error { min-height: 0; max-height: 96px; margin: 0 2px 8px; overflow-y: auto; }
.conversation-composer { display: flex; flex: 0 0 auto; flex-direction: column; min-width: 0; border: 1px solid color-mix(in srgb, var(--chat-strong) 70%, transparent); border-radius: 20px; background: var(--chat-bg); box-shadow: 0 2px 10px color-mix(in srgb, var(--chat-fg) 2.5%, transparent); transition: border-color 160ms, box-shadow 160ms; }
.conversation-composer:focus-within { border-color: color-mix(in srgb, var(--chat-accent) 45%, transparent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--chat-accent) 6%, transparent); }
.composer-input-slot { min-width: 0; padding: 16px 16px 0; }
.conversation-composer textarea { display: block; width: 100%; min-width: 0; min-height: 40px; max-height: min(128px, calc(var(--chat-height, 560px) * .28)); margin: 0; padding: 0; border: 0; border-radius: 0; outline: none; resize: none; overflow-y: auto; background: transparent; color: var(--chat-fg); font-size: 14px; line-height: 1.75; caret-color: var(--chat-accent); }.conversation-composer textarea::placeholder { color: color-mix(in srgb, var(--chat-muted) 80%, transparent); }.conversation-composer textarea:disabled { opacity: .5; }
.composer-toolbar { display: flex; flex: 0 0 auto; align-items: center; gap: 6px; min-width: 0; height: 44px; padding: 4px 8px 8px; color: var(--chat-muted); font-size: 12px; }
.conversation-action { display: inline-flex; flex: none; align-items: center; justify-content: center; width: 36px; min-width: 36px; height: 36px; min-height: 36px; gap: 6px; padding: 0; border: 1px solid transparent; border-radius: 50%; background: transparent; color: var(--chat-muted); line-height: 1; transition: color 160ms, background 160ms, border-color 160ms; }
.conversation-action:hover:enabled { background: var(--chat-elevated); color: var(--chat-fg); }.conversation-action:disabled { opacity: .4; }
.composer-primary { overflow: hidden; white-space: nowrap; transition: background-color .2s, border-color .2s, color .2s, border-radius .24s; }
.send-action, .stop-action { border-color: transparent; background: var(--chat-fg); color: var(--chat-bg); }.send-action:hover:enabled, .stop-action:hover:enabled { border-color: transparent; background: var(--chat-inverse-hover); color: var(--chat-bg); }
.send-action:disabled { border-color: color-mix(in srgb, var(--chat-line) 65%, transparent); background: color-mix(in srgb, var(--chat-elevated) 80%, transparent); color: color-mix(in srgb, var(--chat-muted) 65%, transparent); opacity: 1; }
.composer-send-actions { display: flex; flex: 0 0 auto; align-items: center; gap: 6px; margin-left: auto; }.conversation-file-input { display: none; }
.primary-icon-enter-active, .primary-icon-leave-active { transition: opacity .12s, transform .12s; }.primary-icon-enter-from { opacity: 0; transform: rotate(-90deg) scale(.6); }.primary-icon-leave-to { opacity: 0; transform: rotate(90deg) scale(.6); }
.send-action:hover:enabled :deep(.glyph-motion), .send-action:focus-visible:enabled :deep(.glyph-motion) { animation: chat-send-up 1050ms cubic-bezier(.25,.6,.3,1); }.stop-action:hover:enabled :deep(.glyph-motion), .stop-action:focus-visible:enabled :deep(.glyph-motion) { transform-origin: 12px 12px; animation: chat-stop-press 900ms ease-in-out; }
@keyframes chat-send-up { 0%,100% { transform: translateY(0); opacity: 1; } 38% { transform: translateY(-2px); opacity: .2; } 39% { transform: translateY(2px); opacity: 0; } 70% { transform: translateY(0); opacity: 1; } }@keyframes chat-stop-press { 0%,100% { transform: scale(1); } 25% { transform: scale(.8); } 60% { transform: scale(1.03); } }
.conversation-model { position: relative; min-width: 0; max-width: 15rem; }
.model-trigger { display: flex; width: 100%; height: 32px; align-items: center; gap: 6px; padding: 0 8px; border: 1px solid var(--chat-line); border-radius: 8px; background: transparent; color: var(--chat-fg); font-size: 12px !important; font-weight: 500 !important; text-align: left; transition: border-color .18s ease, background-color .18s ease; }
.model-trigger-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.model-trigger:hover:enabled, .model-trigger[aria-expanded="true"] { border-color: color-mix(in srgb, var(--chat-accent) 30%, transparent); background: color-mix(in srgb, var(--chat-accent) 4.5%, transparent); }.model-trigger:focus-visible { outline-color: color-mix(in srgb, var(--chat-accent) 65%, transparent); }.model-trigger:disabled { cursor: default; opacity: .6; }
.conversation-model-menu { position: absolute; z-index: 70; bottom: calc(100% + 8px); left: 0; min-width: 200px; max-width: min(280px, calc(100vw - 64px)); max-height: min(240px, 40vh); overflow-y: auto; overscroll-behavior: contain; padding: 8px; border: 1px solid color-mix(in srgb, var(--chat-line) 90%, transparent); border-radius: 14px; background: var(--chat-bg); box-shadow: 0 16px 44px rgb(48 36 85 / .09), 0 3px 10px rgb(48 36 85 / .035); }
:global(html.dark .conversation-model-menu) { background: var(--chat-elevated); box-shadow: 0 16px 44px rgb(0 0 0 / .22), 0 3px 10px rgb(0 0 0 / .08); }
.conversation-model-menu > button { display: flex; width: 100%; min-height: 38px; align-items: center; justify-content: space-between; gap: 9px; padding: 6px 9px; border: 1px solid transparent; border-radius: 9px; background: transparent; color: var(--chat-fg); font-size: 13px; text-align: left; transition: background .14s ease; }.conversation-model-menu > button > .model-option-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.conversation-model-menu > button:hover, .conversation-model-menu > button:focus-visible { background: color-mix(in srgb, var(--chat-accent) 7%, transparent); }.conversation-model-menu > button[aria-checked="true"] { border-color: color-mix(in srgb, var(--chat-accent) 8%, transparent); background: color-mix(in srgb, var(--chat-accent) 9%, transparent); }

.message-attachments { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; }.message-user .message-attachments { justify-content: flex-end; }.image-attachment { display: block; width: 100px; height: 76px; padding: 0; border: 1px solid var(--chat-line); border-radius: 6px; overflow: hidden; background: var(--chat-elevated); }.image-attachment img { width: 100%; height: 100%; object-fit: cover; }.message-file { display: flex; align-items: center; gap: 8px; max-width: 200px; min-height: 40px; padding: 6px 8px; border: 1px solid var(--chat-line); border-radius: 10px; background: color-mix(in srgb, var(--chat-elevated) 50%, transparent); color: var(--chat-muted); font-size: 12px; text-decoration: none; }.message-file > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pending-attachments { display: flex; flex-wrap: wrap; gap: 10px; min-height: 0; max-height: min(120px, 20vh); overflow-y: auto; overscroll-behavior: contain; padding: 7px 5px 12px; scrollbar-width: thin; }.pending-file { position: relative; max-width: 160px; }.pending-image { display: block; width: 60px; height: 54px; padding: 0; border: 1px solid var(--chat-line); border-radius: 6px; overflow: hidden; background: var(--chat-elevated); }.pending-image img { width: 100%; height: 100%; object-fit: cover; }.pending-name { display: flex; align-items: center; gap: 6px; height: 56px; padding: 8px; border: 1px solid var(--chat-line); border-radius: 8px; background: var(--chat-elevated); color: var(--chat-muted); font-size: 12px; }.pending-name > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.remove-file { position: absolute; right: -6px; top: -6px; display: grid; place-items: center; width: 16px; height: 16px; padding: 0; border: 1px solid var(--chat-line); border-radius: 50%; background: var(--chat-bg); color: var(--chat-muted); }
.conversation-image-dialog { position: fixed; max-width: min(90vw, 960px); max-height: 90vh; padding: 28px 18px 12px; border: 1px solid var(--chat-line); border-radius: 14px; background: var(--chat-bg); color: var(--chat-fg); }.conversation-image-dialog::backdrop { background: #0009; }.conversation-image-dialog > img { display: block; max-width: 100%; max-height: calc(90vh - 110px); object-fit: contain; }.conversation-image-dialog > p { margin: 10px 0 0; font-size: 12px; overflow-wrap: anywhere; }.close-preview { position: absolute; top: 5px; right: 5px; display: grid; place-items: center; width: 28px; height: 28px; padding: 0; border: 0; border-radius: 6px; color: var(--chat-muted); background: var(--chat-bg); }
@media (max-width: 767px), (pointer: coarse) { .conversation-action { min-width: 44px; min-height: 44px; width: 44px; height: 44px; }.composer-toolbar { height: auto; min-height: 52px; padding-block: 4px; }button.tool-row { min-height: 44px; gap: 6px; } }
@media (pointer: coarse) { .detail-toggle, .process-toggle { height: 44px; min-height: 44px; max-height: 44px; line-height: 44px; } }
@media (max-width: 600px) { .conversation-transcript { padding-inline: 16px; }.conversation-bottom { padding-inline: 12px; }.conversation-model-menu { left: -35px; }.process-toggle { flex-wrap: wrap; } }
@media (prefers-reduced-motion: reduce) { .chat-conversation *, .chat-conversation :deep(*) { animation: none !important; transition: none !important; }.generation-status :deep(.thinking-lamp-halo) { opacity: 0; }.generation-status :deep(.thinking-lamp-core) { opacity: 1; transform: none; box-shadow: none; }.generation-status :deep(.thinking-sheen) { background: none; -webkit-text-fill-color: color-mix(in srgb, var(--chat-muted) 82%, transparent); } }

:global(html.dark .model-provider-mark) {
  --provider-logo-border: #26262b;
  --provider-logo-surface: #141417;
  --provider-logo-muted: #a1a1aa;
}
:global(html.dark .model-provider-mark.is-color) { --provider-logo-surface: #fff; }
:global(html.dark .model-provider-image.is-monochrome) { filter: invert(1); }
</style>

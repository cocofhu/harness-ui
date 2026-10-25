<script setup lang="ts">
import { computed, defineComponent, h, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import {
  Check,
  ChevronDown,
  Cpu,
  Paperclip,
  Plus,
  X,
} from "lucide-vue-next";

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

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    models?: string[];
    initialModel?: string;
    disabled?: boolean;
  }>(),
  {
    modelValue: "",
    placeholder: "What would you like to build?",
    models: () => ["Claude Sonnet 4.6", "GPT-5.4", "Gemini 3.1 Pro"],
    initialModel: "Claude Sonnet 4.6",
    disabled: false,
  },
);
const emit = defineEmits<{
  "update:modelValue": [value: string];
  send: [
    message: { text: string; model: string; files: File[] },
  ];
  "model-change": [model: string];
}>();
const text = ref(props.modelValue);
const selectedModel = ref("");
const menuOpen = ref(false);
const files = ref<File[]>([]);
const input = ref<HTMLInputElement | null>(null);
const textarea = ref<HTMLTextAreaElement | null>(null);
const modelRoot = ref<HTMLElement | null>(null);
const modelMenu = ref<HTMLElement | null>(null);
const modelMenuStyle = ref<Record<string, string>>({});
const modelTrigger = ref<HTMLButtonElement | null>(null);
const modelMenuId = `composer-models-${useId()}`;
function closeModels(returnFocus = false) {
  menuOpen.value = false;
  if (returnFocus) void nextTick(() => modelTrigger.value?.focus({ preventScroll: true }));
}
function modelButtons() {
  return Array.from(modelMenu.value?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]:not(:disabled)') ?? []);
}
function focusModel(button?: HTMLButtonElement) {
  if (!button) return;
  button.focus({ preventScroll: true });
  const menu = modelMenu.value;
  if (!menu) return;
  if (button.offsetTop < menu.scrollTop) menu.scrollTop = button.offsetTop;
  else if (button.offsetTop + button.offsetHeight > menu.scrollTop + menu.clientHeight)
    menu.scrollTop = button.offsetTop + button.offsetHeight - menu.clientHeight;
}
function placeModels() {
  if (!menuOpen.value || !modelTrigger.value) return;
  const bounds = modelTrigger.value.getBoundingClientRect();
  const width = Math.min(340, window.innerWidth - 16);
  const left = Math.max(8, Math.min(bounds.left, window.innerWidth - width - 8));
  const style: Record<string, string> = { position: "fixed", left: `${Math.round(left)}px`, width: `${width}px` };
  if (window.innerHeight - bounds.bottom < 280 && bounds.top > window.innerHeight - bounds.bottom)
    style.bottom = `${Math.round(window.innerHeight - bounds.top + 6)}px`;
  else style.top = `${Math.round(bounds.bottom + 6)}px`;
  modelMenuStyle.value = style;
}
async function toggleModels() {
  if (props.disabled) return;
  if (menuOpen.value) return closeModels();
  menuOpen.value = true;
  await nextTick();
  placeModels();
  if (menuOpen.value) focusModel(modelButtons().find(button => button.getAttribute("aria-checked") === "true") ?? modelButtons()[0]);
}
async function onModelKeydown(event: KeyboardEvent) {
  if (event.isComposing || props.disabled) return;
  if (event.key === "Escape" && menuOpen.value) {
    event.preventDefault();
    event.stopPropagation();
    closeModels(true);
    return;
  }
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  menuOpen.value = true;
  await nextTick();
  placeModels();
  const options = modelButtons();
  if (!options.length) return;
  const current = options.indexOf(document.activeElement as HTMLButtonElement);
  const index = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1
    : (current + (event.key === "ArrowDown" ? 1 : current < 0 ? 0 : -1) + options.length) % options.length;
  focusModel(options[index]);
}
function leaveModels(event: FocusEvent) {
  const target = event.relatedTarget as Node | null;
  if (!modelRoot.value?.contains(target) && !modelMenu.value?.contains(target)) closeModels();
}
function closeModelsOutside(event: PointerEvent) {
  const target = event.target as Node;
  if (!modelRoot.value?.contains(target) && !modelMenu.value?.contains(target)) closeModels();
}
function retireMenu(element: Element) { element.setAttribute("inert", ""); }
function removeFile(index: number) { if (!props.disabled) files.value.splice(index, 1); }
watch(() => props.disabled, disabled => { if (disabled) closeModels(); });
onMounted(() => {
  document.addEventListener("pointerdown", closeModelsOutside);
  window.addEventListener("resize", placeModels);
  window.addEventListener("scroll", placeModels, true);
  autoGrow();
});
onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", closeModelsOutside);
  window.removeEventListener("resize", placeModels);
  window.removeEventListener("scroll", placeModels, true);
});
const canSend = computed(
  () =>
    (text.value.trim().length > 0 || files.value.length > 0) &&
    props.models.includes(selectedModel.value) && !props.disabled,
);
watch(
  () => props.modelValue,
  (value) => {
    text.value = value;
  },
);
watch(
  [() => props.initialModel, () => props.models],
  ([initialModel, models], previous) => {
    const initialChanged = !previous || initialModel !== previous[0];
    const candidate = initialChanged ? initialModel : selectedModel.value;
    selectedModel.value = models.includes(candidate) ? candidate : models[0] ?? "";
    if (!models.length) closeModels();
  },
  { immediate: true, deep: true },
);

function updateText(event: Event) {
  if (props.disabled) return;
  text.value = (event.target as HTMLTextAreaElement).value;
  emit("update:modelValue", text.value);
}
function autoGrow() {
  const element = textarea.value;
  if (!element) return;
  element.style.height = "auto";
  element.style.height = `${Math.min(Math.max(element.scrollHeight, 40), 128)}px`;
}
watch(text, () => nextTick(autoGrow));
function selectModel(model: string) {
  if (props.disabled || !props.models.includes(model)) return;
  selectedModel.value = model;
  closeModels(true);
  emit("model-change", model);
}
function attach(event: Event) {
  if (props.disabled) return;
  files.value = [
    ...files.value,
    ...Array.from((event.target as HTMLInputElement).files || []),
  ];
  if (input.value) input.value.value = "";
}
function send() {
  if (!canSend.value) return;
  emit("send", {
    text: text.value.trim(),
    model: selectedModel.value,
    files: [...files.value],
  });
  text.value = "";
  files.value = [];
  emit("update:modelValue", "");
}
function onKeydown(event: KeyboardEvent) {
  if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
    event.preventDefault();
    send();
  }
}
</script>

<template>
  <div class="composer-demo">
      <div v-if="files.length" class="attachments">
        <span
          v-for="(file, index) in files"
          :key="`${file.name}-${index}`"
          class="file-chip"
        >
          <Paperclip :size="12" /><span>{{ file.name }}</span>
          <button
            type="button"
            :aria-label="`Remove ${file.name}`"
            :disabled="disabled"
            @click="removeFile(index)"
          >
            <X :size="9" :stroke-width="1.7" />
          </button>
        </span>
      </div>
    <div class="composer" :class="{ 'is-disabled': disabled }">
      <div class="composer-field">
      <textarea
        ref="textarea"
        :value="text"
        :placeholder="placeholder"
        aria-label="Message the assistant"
        :disabled="disabled"
        rows="1"
        @input="updateText"
        @keydown="onKeydown"
      />
      </div>
      <div class="toolbar">
        <button
          type="button"
          class="icon-button"
          title="Add attachments"
          aria-label="Add attachments"
          :disabled="disabled"
          @click="input?.click()"
        >
          <Plus :size="18" :stroke-width="1.7" />
        </button>
        <input
          ref="input"
          class="file-input"
          type="file"
          :disabled="disabled"
          multiple
          aria-label="Choose files"
          @change="attach"
        />
        <div ref="modelRoot" class="model-select" @keydown="onModelKeydown" @focusout="leaveModels">
          <button
            type="button"
            ref="modelTrigger"
            class="model-button"
            aria-haspopup="menu"
            :aria-controls="modelMenuId"
            :aria-expanded="menuOpen"
            aria-label="Select model"
            :disabled="disabled || !models.length"
            @click="toggleModels"
          >
            <ProviderLogo v-if="selectedModel" :model="selectedModel" /><span class="model-button-label">{{ selectedModel || 'No models' }}</span><ChevronDown :size="12" />
          </button>
          <Teleport to="body">
          <Transition name="composer-menu" @before-leave="retireMenu">
            <div v-if="menuOpen" ref="modelMenu" :id="modelMenuId" class="model-menu" :style="modelMenuStyle" role="menu" aria-label="Models" @keydown="onModelKeydown" @focusout="leaveModels">
              <button
                v-for="model in models"
                :key="model"
                type="button"
                role="menuitemradio"
                :disabled="disabled"
                :aria-checked="selectedModel === model"
                @click="selectModel(model)"
              >
                <ProviderLogo :model="model" /><span class="model-option-label">{{ model }}</span><Check v-if="selectedModel === model" :size="14" />
              </button>
            </div>
          </Transition>
          </Teleport>
        </div>
        <button
          type="button"
          class="send-button"
          :disabled="!canSend"
          aria-label="Send message"
          @click="send"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><g class="send-glyph"><path d="M12 18V6m-6 6 6-6 6 6" /></g></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.composer-demo, .model-menu {
  --composer-surface: 255 255 255;
  --composer-elevated: 244 244 245;
  --composer-line: 229 229 232;
  --composer-strong: 212 212 216;
  --composer-text: 24 24 27;
  --composer-muted: 82 82 91;
  --composer-accent: 123 97 255;
  --composer-inverse-hover: #3f3f46;
  --composer-menu-shadow: 0 16px 44px rgb(48 36 85 / .09), 0 3px 10px rgb(48 36 85 / .035);
  color: rgb(var(--composer-text));
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
}
.composer-demo { width: 100%; max-width: 360px; min-width: 0; }
:global(html.dark .composer-demo), :global(html.dark .model-menu) {
  --composer-surface: 20 20 23;
  --composer-elevated: 28 28 33;
  --composer-line: 38 38 43;
  --composer-strong: 54 54 62;
  --composer-text: 237 237 240;
  --composer-muted: 161 161 170;
  --composer-inverse-hover: #d4d4d8;
  --composer-menu-shadow: 0 16px 44px rgb(0 0 0 / .22), 0 3px 10px rgb(0 0 0 / .08);
}
.composer-demo *, .composer-demo *::before, .composer-demo *::after,
.model-menu, .model-menu *, .model-menu *::before, .model-menu *::after { box-sizing: border-box; }
.composer {
  min-width: 0;
  border: 1px solid rgb(var(--composer-strong) / .7);
  border-radius: 20px;
  background: rgb(var(--composer-surface));
  box-shadow: 0 2px 10px rgb(var(--composer-text) / .025);
  transition: border-color 160ms, box-shadow 160ms;
}
.composer:focus-within {
  border-color: rgb(var(--composer-accent) / .45);
  box-shadow: 0 0 0 3px rgb(var(--composer-accent) / .06);
}
.composer-field { min-width: 0; padding: 16px 16px 0; }
.composer textarea {
  display: block;
  width: 100%;
  min-width: 0;
  min-height: 40px;
  max-height: 128px;
  margin: 0;
  padding: 0;
  resize: none;
  overflow-y: auto;
  border: 0;
  outline: none;
  background: transparent;
  color: rgb(var(--composer-text));
  font: inherit;
  font-size: 14px;
  line-height: 1.75;
  caret-color: rgb(var(--composer-accent));
}
.composer textarea::placeholder { color: rgb(var(--composer-muted) / .8); }
.composer textarea:disabled { opacity: .5; }
.toolbar {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  padding: 4px 8px;
  color: rgb(var(--composer-muted));
  font-size: 12px;
}
.icon-button, .send-button {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 50%;
  background: transparent;
  color: rgb(var(--composer-muted));
  line-height: 1;
  cursor: pointer;
  transition: color 160ms, background 160ms, border-color 160ms, transform 90ms;
}
.icon-button:hover:enabled { background: rgb(var(--composer-elevated)); color: rgb(var(--composer-text)); }
.icon-button:active:enabled, .send-button:active:enabled { transform: scale(.96); }
.icon-button:disabled { opacity: .4; cursor: not-allowed; }
.send-button {
  margin-left: auto;
  background: rgb(var(--composer-text));
  color: rgb(var(--composer-surface));
}
.send-button:hover:enabled { background: var(--composer-inverse-hover); color: rgb(var(--composer-surface)); }
.send-button:disabled {
  border-color: rgb(var(--composer-line) / .65);
  background: rgb(var(--composer-elevated) / .8);
  color: rgb(var(--composer-muted) / .65);
  opacity: 1;
  cursor: not-allowed;
}
.send-button:is(:hover, :focus-visible):enabled .send-glyph { animation: composer-send-up 1050ms cubic-bezier(.25,.6,.3,1); }
@keyframes composer-send-up {
  0%, 100% { transform: translateY(0); opacity: 1; }
  38% { transform: translateY(-2px); opacity: .2; }
  39% { transform: translateY(2px); opacity: 0; }
  70% { transform: translateY(0); opacity: 1; }
}
.model-select { position: relative; flex: 0 1 auto; min-width: 0; max-width: 240px; }
.model-button {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border: 1px solid rgb(var(--composer-line));
  border-radius: 8px;
  background: transparent;
  color: rgb(var(--composer-text));
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;
}
.model-button-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.model-button > svg { flex: none; color: rgb(var(--composer-muted)); transition: transform 180ms ease; }
.model-button:hover:enabled, .model-button[aria-expanded="true"] {
  border-color: rgb(var(--composer-accent) / .3);
  background: rgb(var(--composer-accent) / .045);
}
.model-button[aria-expanded="true"] > svg { transform: rotate(180deg); }
.model-button:disabled { cursor: default; opacity: .6; }
.model-menu {
  z-index: 70;
  max-height: min(420px, calc(100vh - 24px));
  padding: 8px;
  overflow-y: auto;
  overscroll-behavior: contain;
  border: 1px solid rgb(var(--composer-line) / .9);
  border-radius: 14px;
  background: rgb(var(--composer-surface));
  box-shadow: var(--composer-menu-shadow);
}
:global(html.dark .model-menu) { background: rgb(var(--composer-elevated)); }
.model-menu button {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  min-height: 38px;
  padding: 6px 9px;
  border: 1px solid transparent;
  border-radius: 9px;
  background: transparent;
  color: rgb(var(--composer-text));
  font: inherit;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: background 140ms ease;
}
.model-option-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.model-menu button > svg { flex: none; margin-left: auto; color: rgb(var(--composer-accent)); }
.model-menu button:hover, .model-menu button:focus-visible { background: rgb(var(--composer-accent) / .07); }
.model-menu button[aria-checked="true"] { border-color: rgb(var(--composer-accent) / .08); background: rgb(var(--composer-accent) / .09); }
.composer-menu-enter-active { animation: composer-picker-in 160ms cubic-bezier(.2,.7,.2,1) both; }
@keyframes composer-picker-in { from { opacity: 0; transform: translateY(-4px) scale(.985); } to { opacity: 1; transform: none; } }
.composer button:focus-visible { outline: 2px solid rgb(var(--composer-accent) / .5); outline-offset: 3px; }
.composer .model-button:focus-visible { outline-color: rgb(var(--composer-accent) / .65); }
.file-input { display: none; }
.attachments { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; padding-top: 6px; padding-right: 6px; }
.file-chip { position: relative; display: inline-flex; align-items: center; gap: 6px; height: 36px; max-width: 160px; padding: 0 10px; border: 1px solid rgb(var(--composer-line)); border-radius: 8px; background: rgb(var(--composer-elevated)); color: rgb(var(--composer-muted)); font-size: 12px; }
.file-chip > svg { flex: none; }
.file-chip > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.file-chip button { position: absolute; top: -6px; right: -6px; display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; padding: 0; border: 0; border-radius: 50%; background: rgb(var(--composer-elevated)); color: rgb(var(--composer-muted)); cursor: pointer; }
.file-chip button:focus-visible { outline: 2px solid rgb(var(--composer-accent) / .5); outline-offset: 2px; }
@media (max-width: 767px), (pointer: coarse) {
  .icon-button, .send-button { width: 44px; height: 44px; min-width: 44px; min-height: 44px; }
  .toolbar { min-height: 52px; height: auto; padding-block: 4px; }
}
@media (prefers-reduced-motion: reduce) {
  .composer, .composer button, .model-menu button, .model-button > svg { transition: none; }
  .composer-menu-enter-active, .send-button .send-glyph { animation: none !important; }
  .icon-button:active:enabled, .send-button:active:enabled { transform: none; }
}

:global(html.dark .model-provider-mark) {
  --provider-logo-border: #26262b;
  --provider-logo-surface: #141417;
  --provider-logo-muted: #a1a1aa;
}
:global(html.dark .model-provider-mark.is-color) { --provider-logo-surface: #fff; }
:global(html.dark .model-provider-image.is-monochrome) { filter: invert(1); }
</style>

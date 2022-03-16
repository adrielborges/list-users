let timer: NodeJS.Timeout;
export function deBounce(fn: () => void, delay: number) {
  clearTimeout(timer);
  timer = setTimeout(() => fn(), delay);
}

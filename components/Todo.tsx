/** Highlighted marker for missing client info. Remove every instance before launch. */
export function Todo({ children }: { children: React.ReactNode }) {
  return <span className="todo">TODO: {children}</span>;
}

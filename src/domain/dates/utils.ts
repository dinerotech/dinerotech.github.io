export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

export function formatDateTime(date: Date): string {
  return date.toISOString().split("T")[0]; // Returns 'YYYY-MM-DD'
}

export function dateFormat(created_at) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(created_at).toLocaleDateString("ar-EG", options);
}

// app/notifications/page.tsx
export default async function NotificationsPage() {
  await new Promise((r) => setTimeout(r, 3000)); // 3-second delay

  return <div>Notifications loaded!</div>;
}
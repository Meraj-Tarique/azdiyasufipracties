import React from "react";

export default function ComplexLayoutDashboard({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex",width: '100%'  }}>
        <div style={{ display: "flex", flexDirection: "column", }}>
          <div style={{width: '450px', height: '400px', background: 'red'}}>{users}</div>
          <div style={{width: '450px', height: '400px', background: 'blue'}}>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1, width: '450px',background: 'yellow' }}>{notifications}</div>
      </div>
    </div>
  );
}

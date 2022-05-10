import UserList from "../components/UserList";
import AdminHeader from "../components/AdminHeader";

function Users() {
  return (
    <main>
      <AdminHeader title="Manage Users" />
      <UserList />
    </main>
  );
}

export default Users;

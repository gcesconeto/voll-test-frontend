import UserList from "../components/UserList";
import Header from "../components/Header";
import "../styles/Page.scss";

function Users() {
  return (
    <main className="page">
      <Header title="Manage Users" />
      <UserList />
    </main>
  );
}

export default Users;

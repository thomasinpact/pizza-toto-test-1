import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { useCurrentUser } from "~/context/currentUser.context";
import { User } from "~/models/user.server";

export async function loader() {
  const users = await User.find({});
  return json({ users });
}

export default function LoginPage() {
  const { users } = useLoaderData<typeof loader>();
  const { setCurrentUser } = useCurrentUser();
  const navigate = useNavigate();

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    navigate(user.role === "admin" ? "/admin" : "/client");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Connexion</h1>
        <div className="space-y-2">
          {users.map((user) => (
            <button
              key={user._id}
              onClick={() => handleLogin(user)}
              className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Se connecter en tant que {user.login}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

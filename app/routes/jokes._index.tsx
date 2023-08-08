import { Outlet } from "@remix-run/react";

const JokesRoute = () => {
  return (
    <div>
        <div>
            <h1>Jokes</h1>
            <main>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default JokesRoute

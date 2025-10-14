import { Appbar } from "../components/Appbar";
import { Users } from "../components/Users";

export function Dashboard(){
    return <div>
        <Appbar />
        <div className="m-8">
            <Users  />
        </div>
    </div>
}
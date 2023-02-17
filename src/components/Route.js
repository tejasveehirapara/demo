import Admin from "./Admin";
import Array from "./Array";
import Cards from "./Cards";
import PageNotFound from "./PageNotFound";
import Quetion from "./Quetion";
import Reduxtsk from "./Reduxtask";
import Task from "./Task";

export const User = [
    {
name:"array",
path:"/array",
component:<Array/>
},
{
    name:"file1",
    path:"/question",
    component:<Quetion/>
    },
    {
        name:"file1",
        path:"/reduxtask",
        component:<Reduxtsk/>
        },
        {
            name:"notFound",
            path:"/*",
            component:<PageNotFound/>
            }
]


export const admin = [
    {
        name:"file1",
        path:"/admin",
        component:<Admin/>
    },
    {
        name:"file1",
        path:"/task",
        component:<Task/>
    },
    {
        name:"file1",
        path:"/cards",
        component:<Cards/>
    },
    {
        name:"notFound",
        path:"/*",
        component:<PageNotFound/>
        }
]
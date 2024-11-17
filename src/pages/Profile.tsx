import {useContext} from "react";
import {UserContext} from "../context/userCtx";
import {CardComponent} from "../components/Card";

export function Profile() {

    const userFromLogin = useContext(UserContext)
    const user = {
        imageUrl: 'https://th.bing.com/th/id/OIP.v-ctpndIoNd6VnKgMefYcwHaE8?rs=1&pid=ImgDetMain',
        title: 'Dog',
        description: 'A super dog hero',
        ...userFromLogin,
    }

    return user.isLogged ? <CardComponent title={user.title} image={user.imageUrl}
                                          description={user.description} subTitle={user.email}/> : <>Loading</>

}
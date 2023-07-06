import { auth } from '@/firebase/config'
import { deleteUser } from 'firebase/auth';

const useDeleteUser = async () => {
    const user: any = auth.currentUser
    await deleteUser(user)
        .then(() => {
            console.log('deleted user')
        }).catch((error) => {
            console.log(error.message)
        });
}

export default useDeleteUser
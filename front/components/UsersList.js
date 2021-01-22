export const UserList = (props) => {
    return (
        <>
            <span>All Users :</span>
            {props.users.map((user, i) => {
                return (
                    <div key={`user-${i}`}>
                        <p>Id :{user.id}</p>
                        <p>{user.username}</p>
                        <p>{user.country}</p>
                        <p>{user.name}</p>
                        <p>{user.city}</p>
                    </div>
                );
            })}
        </>
    )
};
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserPage = () => {
  //kullanıcı state'i
  const [user, setUser] = useState(undefined);

  // sayfa state'i
  const [page, setPage] = useState(1);

  //bileşenin ekrana basılma olayını izle
  useEffect(() => {
    //id'si 1 olan kullnıcıyı al
    fetch(`https://jsonplaceholder.typicode.com/users/${page}`)
      //istek başarılı olursa gelen veriyi işle
      .then((res) => res.json())
      //işlenen veriyi al
      .then((data) => setUser(data)); //clg(data)
  }, [page]);

  //<h1>USER PAGE</h1>;
  //h1>user.name
  //<h1>{user === undefined ? "Yükleniyor" : user.name}</h1>;
  return (
    <div>
      {user === undefined ? "Yükleniyor" : <UserCard user={user} />}

      <div className="d-flex justify-content-between align-items-center mt-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-secondary"
        >
          Önceki
        </button>
        <p className="lead fs-4">{page}</p>
        <button
          disabled={page === 10}
          onClick={() => setPage(page + 1)}
          className="btn btn-success"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default UserPage;

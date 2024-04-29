import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyArtCraftList = () => {
  const data = useLoaderData();

  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(email);

  const filteredData = data.filter((item) =>
    item.email && user.email
      ? item.email === user.email
      : item.name === user.displayName
  );

  console.log(filteredData);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addCraftItems/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft Item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      {filteredData.map((data) => {
        return (
          <div key={data._id} className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img className="w-96" src={data.imageUrl} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Update </button>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn btn-error"
                >
                  Delete{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyArtCraftList;

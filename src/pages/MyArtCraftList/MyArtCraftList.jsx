import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
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

  const [customization, setCustomization] = useState("");

  const handleCustomizationChange = (e) => {
    setCustomization(e.target.value);
  };

  const filterBasedOnCustomization =
    customization && customization !== "please select"
      ? filteredData.filter((item) => item.customization === customization)
      : filteredData;

  return (
    <div className="w-[90vw] mx-auto space-y-6">
      <div className="w-fit mx-auto flex flex-col gap-4 my-8">
        <label className="text-2xl font-medium" htmlFor="customization">
          Customization?
        </label>
        <select
          id="customization"
          value={customization}
          onChange={handleCustomizationChange}
          className="bg-green-200 px-3 py-2 rounded-md text-black"
        >
          <option value="please select">Please select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {filterBasedOnCustomization.map((data) => {
        return (
          <div key={data._id} className="card card-side bg-base-100 shadow-xl">
            <figure className="w-96">
              <img className="p-3" src={data.imageUrl} alt="Movie" />
            </figure>

            <div className="card-body">
              <h2 className="card-title font-bold">{data.itemName}</h2>
              <p>${data.price}</p>
              <p>Rating: {data.rating}</p>
              <p>customization: {data.customization}</p>
              <p>Stock Status: {data.Stock}</p>
              <div className="card-actions justify-end">
                <Link to={`/updatedItems/${data._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
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

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const AddCraftItem = () => {
  const { user } = useContext(AuthContext);

  const [customization, setCustomization] = useState("");
  const handleCustomization = (e) => {
    setCustomization(e.target.value);
  };
  const [Stock, setStock] = useState("");
  const handleStock = (e) => {
    setStock(e.target.value);
  };

  const handleAddCraftItem = (event) => {
    event.preventDefault();
    const form = event.target;

    const imageUrl = form.imageUrl.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const email = user.email;
    const name = user.displayName;

    const newCraftItem = {
      imageUrl,
      itemName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      customization,
      processingTime,
      Stock,
      email,
      name,
    };
    form.imageUrl.value = "";
    form.itemName.value = "";
    form.subcategoryName.value = "";
    form.shortDescription.value = "";
    form.price.value = "";
    form.rating.value = "";
    form.processingTime.value = "";
    console.log(newCraftItem);

    // send data to the server
    fetch("http://localhost:5000/addCraftItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Your Craft Items</h2>
      <form onSubmit={handleAddCraftItem}>
        {/* form row image and item name */}
        <div className="md:flex">
          <div className="md: w-1/2">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="md: w-1/2 ml-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Item Name</span>
              </div>
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row subcategory_Name and short description */}
        <div className="md:flex">
          <div className="md: w-1/2">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Subcategory Name</span>
              </div>
              <input
                type="text"
                name="subcategoryName"
                placeholder="Subcategory Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="md: w-1/2 ml-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Short Description</span>
              </div>
              <input
                type="text"
                name="shortDescription"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row price rating */}
        <div className="md:flex">
          <div className="md: w-1/2">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                min={1}
                type="number"
                name="price"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="md: w-1/2 ml-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <input
                max={5}
                min={1}
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row customization- example- yes, no processing_time */}
        <div className="md:flex">
          <div className="md: w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Customization</span>
              </div>
              <select
                value={customization}
                onChange={handleCustomization}
                className="select select-bordered"
              >
                <option>Customization</option>
                <option value="Yes">YES</option>
                <option value="No">NO</option>
              </select>
            </label>
          </div>
          <div className="md: w-1/2 ml-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Processing Time</span>
              </div>
              <input
                type="date"
                name="processingTime"
                placeholder="Processing Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* stock status */}
        <div className="md:flex mb-8">
          <div className="md: w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Stock Status</span>
              </div>
              <select
                value={Stock}
                onChange={handleStock}
                className="select select-bordered"
              >
                <option>Stock Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add"
          className="btn btn-block btn-active btn-neutral"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;

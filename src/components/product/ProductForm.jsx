// TODO: copy codes from the ProductForm component here...
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ProductForm = ({ onSubmit, mode }) => {
  const [product, setProduct] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:8000/products/${ID}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {});
  }, []);
  const { ID } = useParams();
  console.log(product);

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="name-input" className="form-label">
            نام محصول
          </label>
          <input
            type="text"
            className={`form-control${errors.name ? " is-invalid" : ""}`}
            data-testid="name-input"
            placeholder="گوشی آیفون"
            {...register("name", {
              required: true,
            })}
            value={setValue("name", product.name)}
          />
          {errors.name && (
            <div className="invalid-feedback">
              وارد کردن نام محصول اجباری است
            </div>
          )}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="price-input" className="form-label">
            قیمت
          </label>
          <input
            type="number"
            className={`form-control${errors.price ? " is-invalid" : ""}`}
            data-testid="price-input"
            placeholder="1000"
            value={setValue("price", product.price)}
            {...register("price", {
              required: "وارد کردن قیمت اجباری است",
              min: { value: 100, message: "مقدار قیمت باید حداقل 100 باشد" },
            })}
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price.message}</div>
          )}
        </div>
      </div>
      <div className="row mt-4">
        <div className="form-group col-md-6">
          <label htmlFor="category-select" className="form-label">
            دسته‌بندی
          </label>
          <select
            className="form-select"
            data-testid="category-select"
            {...register("category")}
            value={setValue("category", product.category)}
          >
            <option value="mobile">موبایل</option>
            <option value="book">کتاب</option>
            <option value="tshirt">تیشرت</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="description-textarea" className="form-label">
            توضیحات
          </label>
          <textarea
            className={`form-control${errors.description ? " is-invalid" : ""}`}
            data-testid="description-textarea"
            rows="3"
            {...register("description")}
            value={setValue("description", product.description)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-4 float-start"
        data-testid="submit-button"
      >
        افزودن محصول
      </button>
    </form>
  );
};

export default ProductForm;

import React, { useState, useContext } from "react";
import UsersContext from "../store/users-context";

import styles from "./RegistrationForm.module.css";
import Button from "./UI/Button";

const RegistrationForm = () => {
  const usersCtx = useContext(UsersContext);

  const [addFormData, setAddFormData] = useState({
    titre: "",
    description: "",
    date: "",
    date1: "",
    statut: "",
  });

  let initVal = false;

  const addFormHandler = (event) => {
    initVal = false;

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    initVal = true;
    console.log(initVal);
    usersCtx.onAddUser({
      id: Math.random(),
      titre: addFormData.titre,
      description: addFormData.description,
      date: addFormData.date,
      date1: addFormData.date1,
      statut: addFormData.statut,
    });
  };

  return (
    <div className={styles.justifyContentAround}>
    
      <form className={styles.formStyle} onSubmit={submitHandler}>
       <h1> Remplissez le formulaire</h1>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="titre">
          Titre
          </label>
          <input
            type="text"
            placeholder=" Votre Titre"
            className={styles.formControl}
            name="titre"
            value={initVal ? "" : addFormData.name}
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder=" Votre Description"
            className={styles.formControl}
            name="description"
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">D??but</label>
          <input
            type="date"
            placeholder=""
            className={styles.formControl}
            name="date"
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date1">Fin</label>
          <input
            type="date"
            placeholder=""
            className={styles.formControl}
            name="date1"
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="statut">Statut</label>
        <select
          type="text"
          placeholder="Votre Statut"
          className={styles.formControl}
          name="statut"
          onChange={addFormHandler}
          required
        >
          <option value="A r??aliser">A r??aliser</option>
          <option value="En cours">En cours</option>
          <option value="Fait">Fait</option>
          <option value="Archiver">Archiver</option>
        </select>
        </div>
        <div>
          <Button type="submit">Ajouter</Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
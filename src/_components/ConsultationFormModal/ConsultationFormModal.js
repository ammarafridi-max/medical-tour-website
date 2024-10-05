import { useEffect, useState } from "react";
import styles from "./ConsultationFormModal.module.css";
import { IoClose } from "react-icons/io5";

export default function ConsultationFormModal({ showModal, setShowModal }) {
  function closeModal() {
    setShowModal("hide");
  }

  return (
    <div
      className={`${styles.modal} ${styles[showModal]}`}
      onClick={closeModal}
    >
      <div className={styles.overlay}>
        <form className={styles.container} onClick={(e) => e.stopPropagation()}>
          <div className={styles.closeIconDiv}>
            <IoClose className={styles.closeIcon} onClick={closeModal} />
          </div>
        </form>
      </div>
    </div>
  );
}

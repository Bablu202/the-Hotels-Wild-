import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        {/* CABIN FORM  */}
        <Modal.Open opens="cabin-form">
          <Button>Create Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
        {/* TABLE FROM
      <Modal.Open opens="table">
        <Button>Cabin Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
       */}
      </Modal>
    </div>
  );
}

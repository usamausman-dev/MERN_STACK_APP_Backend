import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';


function CategoryModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [CategoryName, setCategoryName] = useState("")
    const [CategoryImage, setCategoryImage] = useState(null)

    const AddCategory = (e) => {
        e.preventDefault();



        const storageRef = ref(storage, `images/category/${CategoryImage.name}`);
        uploadBytes(storageRef, CategoryImage).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    const payload = { CategoryName, CategoryImage: url }
                    axios.post('/api/add-category', payload)
                        .then((json) => {
                            setShow(false);
                        })
                        .catch(err => alert(err.message))

                })
                .catch((error) => alert(error.message));
        });

    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Category
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={AddCategory}>
                        <div className="mb-3">
                            <label htmlFor="CategoryName" className="form-label">
                                Category Name
                            </label>
                            <input
                                value={CategoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CategoryName"
                                aria-describedby="emailHelp"
                            />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Category Image
                            </label>
                            <input className="form-control" onChange={(e) => setCategoryImage(e.target.files[0])} type="file" id="formFile" />
                        </div>



                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>


                </Modal.Body>

            </Modal>
        </>
    );
}

export default CategoryModal;
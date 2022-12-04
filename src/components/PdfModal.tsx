import React from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Modal } from "@material-ui/core";
import "../styles/index.css";

const PdfModal = ({
  showModal,
  setShowModal,
  pdfLink,
}: {
  showModal: any;
  setShowModal: any;
  pdfLink: any;
}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Modal
        // cancelText="Discard Changes"
        id="regular"
        open={showModal}
        //okText="Save Changes"
        //hasFooter={false}
        //</div>onClose={function noRefCheck() {}}
        onClose={() => setShowModal(false)}
        //onOk={function noRefCheck() {}}
      >
        <div className="pb-10">
          <Document file={`${pdfLink}`} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default PdfModal;

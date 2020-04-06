import * as React from 'react';

const ProductDetail: React.FC<{ closeModal: () => void }> = ({
  closeModal
}) => {
  function onSubmit() {
    closeModal();
  }

  return (
    <section>
      <form
        action="#"
        className="Product_detail"
        onSubmit={e => e.preventDefault()}
      >
        <h2>Nike</h2>

        <div className="Product_detail_btn-group">
          <button className="Btn Btn_cancel" onClick={closeModal}>
            Cancel
          </button>
          <button className="Btn Btn_submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export { ProductDetail };

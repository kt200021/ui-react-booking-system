const SuccessMessage = (props) => {
  return (
    <section className="success-message-overlay">
      <section className="message-box">
        <span className="message-content">{props.message} </span>
      </section>
    </section>
  );
};
export default SuccessMessage;

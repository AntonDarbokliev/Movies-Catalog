import './Spinner.css';

export const Spinner = () => {
  return (
    <div className={`loader-container visible`}>
      <div className="loader"></div>
    </div>
  );
};
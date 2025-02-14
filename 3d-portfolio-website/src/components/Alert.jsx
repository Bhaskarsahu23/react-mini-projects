function Alert({ type, text }) {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === 'danger' ? 'bg-red-800' : 'bg-green-800'
        } p-2 text-indigo-100 leading-none flex lg:inline-flex items-center rounded-md`}
        role="alert"
      >
        <p
          className={`${
            type === 'danger' ? 'bg-red-500' : 'bg-green-500'
          } flex rounded-full uppercase font-semibold mr-3 px-2 py-1 text-xs`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
}
export default Alert;

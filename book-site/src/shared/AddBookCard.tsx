export function AddBookCard() {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white hover:cursor-pointer">
      <div className="flex justify-center pt-4 px-6">
        <img
          className="object-cover h-64"
          src={
            "https://secure.img1-fg.wfcdn.com/im/73052174/resize-h445%5Ecompr-r85/5678/56786400/Vintage+Book+ColorPak.jpg"
          }
          alt={"Add Book Image"}
        />
      </div>
      <div className="flex justify-center text-center px-6 pt-2 pb-2">
        <div className="font-bold text-xl">Add A Book</div>
      </div>
      <div className="flex justify-center text-center px-6 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Book
        </button>
      </div>
    </div>
  );
}

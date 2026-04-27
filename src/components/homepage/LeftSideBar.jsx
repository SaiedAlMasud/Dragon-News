

const LeftSideBar = ({ catagories, activeId }) => {
    return (
        <div className="">
            <h1 className="font-Bold text-2xl">All Catagories</h1>
            <ul className="font-semibold text-xl text-center my-5 flex flex-col gap-5 text-gray-600">
                {
                    catagories.news_category.map(category => {
                        return <li key={category.category_id} className={activeId === category.category_id ? "bg-gray-300 rounded-md p-1" : "p-1"}>
                            {category.category_name}
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;
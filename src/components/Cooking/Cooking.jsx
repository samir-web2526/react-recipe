import PropTypes from "prop-types";



const Cooking = ({ cooks,handlePreparing={handlePreparing}, currents={currents} }) => {
 


  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-3">
          Want to Cook: {cooks.length}
        </h1>
        <hr />

        <table>
          <thead>
            <tr>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Time</th>
              <th className="text-left p-2">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {cooks.map((cook) => (
              <tr className="mb-3" key={cook.recipe_id}>
                <td className="px-2">{cook.recipe_name}</td>
                <td className="px-1">{cook.preparing_time}</td>
                <td className="px-1">{cook.calories}</td>
                <td>
                  <button onClick={()=>handlePreparing(cook,cook.recipe_id)} className="btn bg-green-500 rounded-3xl py-1 px-4">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>

        <h1 className="text-3xl font-bold mb-3">Currently Cooking:{currents.length}</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th className="text-left p2">Name</th>
              <th className="text-left p2">Time</th>
              <th className="text-left p2">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {
              currents.map((current)=>(
                <tr key={current.recipe_id}>
                  <td className="px-2">{current.recipe_name}</td>
                  <td className="px-2">{current.preparing_time}</td>
                  <td className="px-2">{current.calories}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  );
};

Cooking.propTypes = {
  cooks: PropTypes.object.isRequired,
  currents:PropTypes.object.isRequired,
  handlePreparing:PropTypes.func.isRequired
};

export default Cooking;

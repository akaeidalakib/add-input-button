import { useState } from 'react';

const IndexPage = () => {
  const [inputs, setInputs] = useState(['']); // State to store input values

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="container mx-auto my-8">
      <form>
        {inputs.map((input, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Input {index + 1}</label>
            <input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        ))}

        <button type="button" onClick={handleAddInput} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Input
        </button>

        <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default IndexPage;

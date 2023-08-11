/* eslint-disable react/prop-types */
export default function Table({ users }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Company</th>
            <th>Height</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Blood Group</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.image} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{`${user.firstName} ${user.lastName}`}</div>
                    <div className="text-sm opacity-50">
                      {user.address.city}
                    </div>
                  </div>
                </div>
              </td>
              <td>{user.birthDate}</td>
              <td>
                {user.company.name}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {user.company.title}
                </span>
              </td>
              <td>{user.height} cm</td>
              <td>{user.age}</td>
              <td>{user.weight} kg</td>
              <td>{user.bloodGroup}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

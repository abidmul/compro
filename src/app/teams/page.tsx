import Image from "next/image";
import { getUsers } from "../../lib/users";

export default async function Teamss() {
  const user = await getUsers();
  console.log(user);
  return (
    <>
      <div className="flex py-20 pb-2 text-5xl justify-center bg-[#824D74] text-orange-500">Our Team</div>
    
      <div className="flex overflow-x-auto text-center bg-[#824D74] ">
        <table className="table max-sm:table-sm max-sd:table-md max-lg:table-lg"  data-aos="fade-zoom-in" 
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
          {/* head */}
          <thead>
            <tr className="text-xs text-sm text-lg text-center font-bold text-orange-500">
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE/CELL</th>
              <th>UMUR KETERIMA</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                user.map((items:any, idx:any) =>{
                    return <tr key={idx}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={items.picture.thumbnail}
                        alt="Avatar Tailwind CSS Component"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-orange-500">{items.name.first}{items.name.last}</div>
                    <div className="text-sm opacity-50">{items.country}</div>
                  </div>
                </div>
              </td>
              <td className="text-orange-500">
                {items.email}
              </td>
              <td className="text-orange-500">{items.phone}
                <br />
                <span className="badge badge-ghost badge-sm text-orange-500">
                  {items.cell}
                </span>
              </td>
              <th className="text-orange-500">{items.registered.age}</th>
            </tr>
                })
            }
            {/* row 2 */}
            {/* row 3 */}
            {/* row 4 */}
          </tbody>
        </table>
      </div>

    </>
  );
}

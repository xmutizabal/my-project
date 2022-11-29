export default function Ranking(){
	return (
		<div className="flex justify-center">
			<table className="table-auto w-full">
					<thead>
						<tr>
							<th>POSICION</th>
							<th>CORREDOR</th>
							<th>FOTO</th>
							<th>TIEMPO ACUMULADO</th>
						</tr>
					</thead>
					<tbody>
						<tr className="odd:bg-tema-200 even:bg-tema-400">
							<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
							<td>Malcolm Lockyer</td>
							<td>1961</td>
							<td>1:12:23</td>
						</tr>
						<tr className="odd:bg-tema-200 even:bg-tema-400">
							<td className="invisible md:visible">
									<img
									src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
									class="rounded-full w-32"
									alt="Avatar"
									/>
									</td>
							<td>The Eagles</td>
							<td>1972</td>
							<td>1:43:41</td>
						</tr>
						<tr className="odd:bg-tema-200 even:bg-tema-400 border border-indigo-600 hover:border-t-4">
							<td>Shining Star</td>
							<td>Earth, Wind, and Fire</td>
							<td>1975</td>
							<td>1:43:41</td>
						</tr>
					</tbody>
			</table>
		</div>
	)
}
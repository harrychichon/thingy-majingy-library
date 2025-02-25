import './LeagueTable.scss';
import ClubCard, {ClubCardType} from '../ClubCard/ClubCard.tsx';

type LeagueTableProps = {
	className: string,
	activeTeams: ClubCardType[],
	mp: number,
	w: number,
	d: number,
	l: number,
	pts: number,
}


const LeagueTable = ({
	                     className,
	                     activeTeams,
	                     mp,
	                     w,
	                     d,
	                     l,
	                     pts,
                     }: LeagueTableProps) => {
	return <div className="LeagueTable">
		<table className={className}>
			<caption>Standings</caption>
			<thead>
			<tr>
				<th scope="col">Pos</th>
				<th scope="col">Team</th>
				<th scope="col">MP</th>
				<th scope="col">W</th>
				<th scope="col">D</th>
				<th scope="col">L</th>
				<th scope="col">Pts</th>
			</tr>
			</thead>
			<tbody>
			{activeTeams.map((team) => (
				<tr className="Pos1">
					<td>1</td>
					<td>{team.clubName}</td>
					<td>
						<ClubCard
							key={index}
							club={club}
							index={index}
							deleteClub={handleClickRelegate}
							editClub={() => handleEditClub(index)}
						/></td>
					<td>{mp}</td>
					<td>{w}</td>
					<td>{d}</td>
					<td>{l}</td>
					<td>{pts}</td>
				</tr>
			))}
			</tbody>
		</table>
	</div>;
};

export default LeagueTable;
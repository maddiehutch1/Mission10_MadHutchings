
namespace Mission10API.Models
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingLeagueContext _bowlingLeagueContext;
        public EFBowlingRepository(BowlingLeagueContext temp) 
        {
            _bowlingLeagueContext = temp;
        }
        public IEnumerable<Bowler> Bowlers => _bowlingLeagueContext.Bowlers.ToList();

        public IEnumerable<BowlerScore> Bowler_Scores => _bowlingLeagueContext.BowlerScores.ToList();

        public IEnumerable<MatchGame> Match_Games => _bowlingLeagueContext.MatchGames.ToList();

        public IEnumerable<Team> Teams => _bowlingLeagueContext.Teams.ToList();

        public IEnumerable<Tournament> Tournaments => _bowlingLeagueContext.Tournaments.ToList();

        public IEnumerable<TourneyMatch> Tourney_Matches => _bowlingLeagueContext.TourneyMatches.ToList();

        public IEnumerable<ZtblBowlerRating> ztblBowlerRatings => _bowlingLeagueContext.ZtblBowlerRatings.ToList();

        public IEnumerable<ZtblSkipLabel> ztblSkipLabels => _bowlingLeagueContext.ZtblSkipLabels.ToList();

        public IEnumerable<ZtblWeek> ztblWeeks => _bowlingLeagueContext.ZtblWeeks.ToList();
    }
}

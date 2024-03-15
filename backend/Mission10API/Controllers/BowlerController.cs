using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10API.Models;

namespace Mission10API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository { get; set; }

        public BowlerController(IBowlingRepository temp)
        {
            _bowlingRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Bowler> Get() 
        { 
            var bowlerData = from bowler in _bowlingRepository.Bowlers
                             join team in _bowlingRepository.Teams
                             on bowler.TeamId equals team.TeamId
                             where team.TeamName == "Marlins" || team.TeamName == "Sharks"
                             select new Bowler
                             {
                                 BowlerId = bowler.BowlerId,
                                 BowlerFirstName = bowler.BowlerFirstName,
                                 BowlerMiddleInit = bowler.BowlerMiddleInit,
                                 BowlerLastName = bowler.BowlerLastName,
                                 BowlerAddress = bowler.BowlerAddress,
                                 BowlerCity = bowler.BowlerCity,
                                 BowlerState = bowler.BowlerState,
                                 BowlerZip = bowler.BowlerZip,
                                 BowlerPhoneNumber = bowler.BowlerPhoneNumber,
                                 Team = new Team {
                                     TeamId = team.TeamId,
                                     TeamName = team.TeamName
                                 }

                             };  // do linq where clause to pull out Sharks and Marlins teams

            return bowlerData.ToList();
        }
    }
}

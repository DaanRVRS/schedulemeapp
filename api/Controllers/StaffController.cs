using Microsoft.AspNetCore.Mvc;
using Models;

namespace api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> GetStaff()
        {   
            var staffList = new List<Staff> {
                new Staff
                {
                    Id = 1, 
                    Email = "employee@scheduleme.com",
                    FirstName = "Jan",
                    LastName = "peters",
                    Rank = "Employee"
                }
            };

            return Ok(staffList);
        }
    }
}
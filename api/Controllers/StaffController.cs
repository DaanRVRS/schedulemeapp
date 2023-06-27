using Microsoft.AspNetCore.Mvc;
using Service;

namespace api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : Controller
    {

        private readonly IStaffService _staffService;
        public StaffController(IStaffService staffService)
        {
            _staffService = staffService;
        }
    
    // get all staff members
        [HttpGet]
        public async Task<ActionResult<List<StaffViewmodel>>> GetStaff()
        {
            return await _staffService.GetStaff();
        }
        
        // get specific staff member
        [HttpGet("{id}")]
        public async Task<ActionResult<StaffViewmodel>> GetSingleStaff(int id)
        {
            var result = _staffService.GetSingleStaff(id);
            if (result is null)
                return NotFound("User could not be found!");
            return Ok(result);
        }
        
        // add a staff member
        [HttpPost]
        public async Task<ActionResult<List<StaffViewmodel>>> AddStaff(StaffViewmodel staffViewmodel)
        {
            var result = _staffService.AddStaff(staffViewmodel);
            return Ok(result);
        }
        
        // edit a staff member
        [HttpPut("{id}")]
        public async Task<ActionResult<List<StaffViewmodel>>> EditStaff(int id, StaffViewmodel request)
        {
            var result = _staffService.EditStaff(id, request);
            if (result is null)
                return NotFound("User could not be found!");
            return Ok(result);
        }
        
        // delete a staff member
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<StaffViewmodel>>> DeleteStaff(int id)
        {
            var result = _staffService.DeleteStaff(id);
            if (result is null)
                return NotFound("User could not be found!");
            return Ok(result);
        }
    }
}
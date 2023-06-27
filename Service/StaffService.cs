using System.Data.Entity;
using Dal;
using Models;

namespace Service;

public class StaffService : IStaffService
{
    private static List<StaffViewmodel> staffList = new List<StaffViewmodel> {
        new StaffViewmodel
        {
            Id = 1, 
            Email = "employee@scheduleme.com",
            FirstName = "Jan",
            LastName = "peters",
            Rank = "Employee"
        },
        new StaffViewmodel
        {
            Id = 2, 
            Email = "employee@scheduleme.com",
            FirstName = "Peter",
            LastName = "Pan",
            Rank = "Admin"
        }
    };

    private readonly DataContext _context;
    public StaffService(DataContext context)
    {
        _context = context;
    }
    
    public async Task<List<StaffViewmodel>> GetStaff()
    {
        var staff = await _context.Stafflist.ToListAsync();
        return staff;
    }

    public StaffViewmodel? GetSingleStaff(int id)
    {
        var staff = staffList.Find(x => x.Id == id);
        if (staff is null)
            return null;
        return staff;
    }

    public List<StaffViewmodel> AddStaff(StaffViewmodel staffViewmodel)
    {
        staffList.Add(staffViewmodel);
        return staffList;
    }

    public List<StaffViewmodel>? EditStaff(int id, StaffViewmodel request)
    {
        var staff = staffList.Find(x => x.Id == id);
        if (staff is null)
            return null;

        staff.FirstName = request.FirstName;
        staff.LastName = request.LastName;
        staff.Email = request.Email;
        staff.Rank = request.Rank;
            
        return staffList;
    }

    public List<StaffViewmodel>? DeleteStaff(int id)
    {
        var staff = staffList.Find(x => x.Id == id);
        if (staff is null)
            return null;

        staffList.Remove(staff);

        return staffList;
    }
}
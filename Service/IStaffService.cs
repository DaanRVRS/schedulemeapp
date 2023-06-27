using Models;

namespace Service
{
    public interface IStaffService
    {
        Task<List<StaffViewmodel>> GetStaff();
    
        StaffViewmodel? GetSingleStaff(int id);
    
        List<StaffViewmodel> AddStaff(StaffViewmodel staffViewmodel);

        List<StaffViewmodel>? EditStaff(int id, StaffViewmodel request);

        List<StaffViewmodel>? DeleteStaff(int id);
    }  
}


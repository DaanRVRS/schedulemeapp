namespace Models;

public class StaffViewmodel
{
    public int Id { get; set; }
    //comment
    public string Email { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Rank { get; set; } = string.Empty;
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookAPI.Models;

namespace BookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogindetailController : ControllerBase
    {
        private readonly BookDetailContext _context;

        public LogindetailController(BookDetailContext context)
        {
            _context = context;
        }
        private bool Check(Logindetail a)
        {
            var x = _context.Logindetails.Count(s => s.UserName == a.UserName & s.Password == a.Password);
            if (x > 0)
                return true;
            else
                return false;
        }


        // GET: api/Logindetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Logindetail>>> GetLogindetails()
        {
            return await _context.Logindetails.ToListAsync();
        }

        // GET: api/Logindetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Logindetail>> GetLogindetail(int id)
        {
            var logindetail = await _context.Logindetails.FindAsync(id);

            if (logindetail == null)
            {
                return NotFound();
            }

            return logindetail;
        }

        // PUT: api/Logindetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLogindetail(int id, Logindetail logindetail)
        {
            if (id != logindetail.LoginID)
            {
                return BadRequest();
            }

            _context.Entry(logindetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LogindetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Logindetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Logindetail>> PostLogindetail(Logindetail logindetail)
        {
            //_context.Logindetails.Add(logindetail);
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetLogindetail", new { id = logindetail.LoginID }, logindetail);
            if (Check(logindetail))
                return Accepted();
            else
                return BadRequest();
        }

        // DELETE: api/Logindetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLogindetail(int id)
        {
            var logindetail = await _context.Logindetails.FindAsync(id);
            if (logindetail == null)
            {
                return NotFound();
            }

            _context.Logindetails.Remove(logindetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LogindetailExists(int id)
        {
            return _context.Logindetails.Any(e => e.LoginID == id);
        }
    }
}

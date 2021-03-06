// <auto-generated />
using BookAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BookAPI.Migrations
{
    [DbContext(typeof(BookDetailContext))]
    [Migration("20210219073516_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.3");

            modelBuilder.Entity("BookAPI.Models.BookDetail", b =>
                {
                    b.Property<int>("BookDetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("AuthorName")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<string>("BookCategory")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<string>("BookTitle")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("IsbnNumber")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<string>("PublisherName")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.HasKey("BookDetailId");

                    b.ToTable("BookDetails");
                });

            modelBuilder.Entity("BookAPI.Models.Logindetail", b =>
                {
                    b.Property<int>("LoginID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("LoginID");

                    b.ToTable("Logindetails");
                });
#pragma warning restore 612, 618
        }
    }
}

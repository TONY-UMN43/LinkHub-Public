from sqlalchemy import Column,String,Integer,ForeignKey,Boolean,DateTime,Date,Time,PrimaryKeyConstraint,Enum,ForeignKeyConstraint
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import JSONB
from database import Base


class Accounts(Base):
    __tablename__ = "accounts"
    id = Column(Integer,primary_key = True,nullable=False,index=True)
    email = Column(String,unique=True,nullable=False)
    email_verified = Column(Boolean,default=True) 
    account_relation = relationship("UserProfiles", back_populates="users_profile_relation")


class UserProfiles(Base):
    __tablename__ = "user_profiles"
    user_id = Column(Integer,ForeignKey("accounts.id"),index=True,primary_key=True,nullable=False)
    first_name = Column(String,nullable=False)
    last_name = Column(String,nullable=False)
    bio = Column(String)
    location_city = Column(String,nullable=True)
    location_country = Column(String,nullable=True)
    location_state = Column(String,nullable=True)
    profile_pic = Column(String,nullable=True)
    website_link = Column(String,nullable=True)
    date_created = Column(Date,nullable=True)
    users_profile_relation = relationship("Accounts", back_populates="account_relation")


class WorkExperience(Base):
    __tablename__ = "work_experience"
    id = Column(Integer,primary_key=True,index=True)
    user_id = Column(Integer,ForeignKey("user_profiles.user_id"),nullable=False,index=True)
    company_name = Column(String,nullable=False)
    title = Column(String,nullable=False)
    description = Column(String,nullable=True)
    job_type = Column(String) # DataType hidden to safety concerns
    location_state = Column(String,nullable=True)
    location_country = Column(String,nullable=True)
    date_started = Column(Date)
    date_ended = Column(Date)


class Company_Profiles(Base):
    __tablename__ = "company_profiles"
    company_id = Column(Integer,index=True,primary_key=True,nullable=False)
    founder_id = Column(Integer,ForeignKey("accounts.id"),index=True,nullable=False)
    industry_field = Column(Integer,ForeignKey("industry_fields.id"),nullable=False,index=True) # What industry is this company in? Retail,Tech,Restaruant,Eduction,
    description = Column(String,nullable=True)
    company_types = Column(String) # DataType hidden to safety concerns
    company_name = Column(String,unique=True,nullable=False)
    logo = Column(String,nullable=True)
    website = Column(String,nullable=False)
    verified = Column(Boolean,default=False)
    date_created = Column(Date,index=True)



class Connections(Base):
    __tablename__ = "connections"
    user_id_one = Column(Integer,ForeignKey("user_profiles.user_id"),nullable=False)
    user_id_two = Column(Integer,ForeignKey("user_profiles.user_id"),nullable=False)
    status = Column(String) # DataType hidden to safety concerns
    date_created = Column(Date)
    __table_args__ = (
        PrimaryKeyConstraint("user_id_one","user_id_two"),
    )

class Posts(Base):
    __tablename__ = "posts"
    id = Column(Integer,index=True,primary_key=True,nullable=False)
    account_id = Column(Integer,ForeignKey("accounts.id"),nullable=False)
    content = Column(String,nullable=False)
    img_url = Column(String,nullable=True)
    public = Column(Boolean,default=True)
    date_posted = Column(DateTime,nullable=True)
    
class Likes(Base):
    __tablename__ = "likes"
    post_id = Column(Integer,ForeignKey("posts.id"),primary_key=True,nullable=False,index=True)
    user_id = Column(Integer,ForeignKey("user_profiles.user_id"),primary_key=True,nullable=False,index=True)
    date_created = Column(DateTime,index=True)



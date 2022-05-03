# VueMiddle

select experience as 'experience', count(*) as count
from (
select case
when experience_year <= 1 then '0-1'
when experience_year between 2 and 3 then '1-3'
when experience_year between 4 and 5 then '3-5'
when experience_year between 6 and 10 then '5-10'
else 'more than 10'

end as experience
from user_arbitrator //경험

select result as 'result', count(*) as count
from (
select case
when result_amount <= 5 then '0-5'
when result_amount between 6 and 10 then '5-10'
when result_amount between 11 and 15 then '10-15'
when result_amount between 16 and 20 then '15-20'
else 'more than 20'
end as result
from user_arbitrator
)A
group by A.result; //해결건수

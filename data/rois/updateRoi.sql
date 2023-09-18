UPDATE [dbo].[rois]
SET [projectname]=@projectname,
    [projectDescription]=@projectDescription,
    [cpc]=@cpc,
    [cpi]=@cpi,
    [cpl]=@cpl,
    [cps]=@cps,
    [startDate]=@startDate,
    [endDate]=@endDate
WHERE [roiId]=@roiId

SELECT [roiId]
    ,[projectname]
    ,[projectDescription]
    ,[cpc]
    ,[cpi]
    ,[cpl]
    ,[cps]
    ,[uac]
    ,[cv]
    ,[startDate]
    ,[endDate]
  FROM [dbo].[rois]
  WHERE [roiId]=@roiId
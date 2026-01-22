<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - <?php echo $firstName; ?> <?php echo $lastName; ?></title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: white;
            font-size: 0.875rem;
        }
        
        .cv-container {
            max-width: 21cm;
            margin: 0 auto;
            padding: 1rem;
        }
        
        .preview-personal h1 {
            font-size: 1.5rem;
            margin: 0 0 0.25rem 0;
        }
        
        .preview-personal .professional-title {
            font-size: 0.9375rem;
            color: #666;
            margin: 0 0 0.3125rem 0;
        }
        
        .preview-personal .contact-info {
            font-size: 0.8125rem;
            color: #888;
            margin: 0.3125rem 0;
        }
        
        .preview-personal .experience-summary {
            margin: 0.5rem 0;
            line-height: 1.4;
            font-size: 0.8125rem;
        }
        
        .preview-personal p {
            margin: 0 0 0.25rem 0;
        }
        
        .preview-experience h2,
        .preview-education h2,
        .preview-skills h2 {
            font-size: 1rem;
            color: #007bff;
            border-bottom: 0.0625rem solid #007bff;
            padding-bottom: 0.25rem;
            margin-top: 0.75rem;
            margin-bottom: 0.5rem;
        }
        
        .preview-job,
        .preview-education-item {
            margin-bottom: 0.75rem;
        }
        
        .preview-job .job-title,
        .preview-education-item .degree-title {
            font-weight: 600;
            font-size: 0.9375rem;
            margin: 0;
            display: inline;
        }
        
        .preview-job .company,
        .preview-education-item .institution {
            font-style: italic;
            color: #555;
            margin: 0 0 0 0.5rem;
            display: inline;
        }
        
        .preview-job .dates,
        .preview-education-item .dates {
            font-size: 0.75rem;
            color: #888;
            margin: 0 0 0 0.5rem;
            display: inline;
        }
        
        .job-header,
        .education-header {
            margin: 0 0 0.3125rem 0;
        }
        
        .preview-job .description,
        .preview-education-item .description {
            margin: 0.3125rem 0;
            line-height: 1.3;
            font-size: 0.8125rem;
        }
        
        .skills-container {
            line-height: 1.8;
            
        }
        
        .skill-item {
            display: inline-block;
            margin-right: 0.5rem;
            margin-bottom: 0.25rem;
            margin-top: 0.25rem;
        }
        
        .skill-tag {
            display: inline-block;
            background-color: #e7f3ff;
            color: #007bff;
            padding: 0.1875rem 0.5rem;
            line-height: normal;
            border-radius: 1.25rem;
            font-size: 0.75rem;
        }
    </style>
</head>
<body>
    <div class="cv-container">

        <div class="preview-personal">
            <h1><?php echo $firstName; ?> <?php echo $lastName; ?></h1>
            <?php if ($wantedTitle): ?>
                <p class="professional-title"><?php echo $wantedTitle; ?></p>
            <?php endif; ?>
            <p class="contact-info">Email: <?php echo $email; ?><?php echo $phone ? ' | Phone: ' . $phone : ''; ?></p>
            <?php if ($summary): ?>
                <p class="experience-summary"><?php echo nl2br($summary); ?></p>
            <?php endif; ?>
        </div>

        <div class="preview-experience">
            <h2>Professional Experience</h2>
            <?php foreach ($data['pastWork'] as $work): ?>
                <div class="preview-job">
                    <p class="job-header">
                        <span class="job-title"><?php echo $work['jobTitle']; ?></span>
                        <span class="company"><?php echo $work['companyName']; ?></span>
                        <span class="dates"><?php echo $work['jobStartDate']; ?> - <?php echo $work['jobEndDate'] ?: 'Present'; ?></span>
                    </p>
                    <?php if ($work['jobDescription']): ?>
                        <p class="description"><?php echo nl2br($work['jobDescription']); ?></p>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
        

        <div class="preview-education">
            <h2>Education</h2>
            <?php foreach ($data['education'] as $edu): ?>
                <div class="preview-education-item">
                    <p class="education-header">
                        <span class="degree-title"><?php echo $edu['degree']; ?></span>
                        <span class="institution"><?php echo $edu['institution']; ?></span>
                        <span class="dates"><?php echo $edu['institutionStartDate']; ?> - <?php echo $edu['institutionEndDate'] ?: 'Present'; ?></span>
                    </p>
                    <?php if ($edu['educationDescription']): ?>
                        <p class="description"><?php echo nl2br($edu['educationDescription']); ?></p>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
        

        <div class="preview-skills">
            <h2>Skills</h2>
            <div class="skills-container">
                <?php foreach ($data['skills'] as $skill): ?>
                    <div class="skill-item">
                        <span class="skill-tag">
                            <?php echo $skill['skillName']; ?> - <?php echo $skill['skillLevel']; ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</body>
</html>

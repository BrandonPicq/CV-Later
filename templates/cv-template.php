<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - <?php echo $firstName; ?> <?php echo $lastName; ?></title>
    <style>
        <?php include __DIR__ . '/../assets/css/style-template.css'; ?>
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

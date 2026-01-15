<?php

require 'vendor/autoload.php';

use Dompdf\Dompdf;

$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput, true);

header('Content-Type: application/json');

if (empty($data['identite']['firstName'])) {
    echo json_encode(['error' => 'First name is required']);
    exit;
}

if (empty($data['identite']['lastName'])) {
    echo json_encode(['error' => 'Last name is required']);
    exit;
}

if (empty($data['identite']['email'])) {
    echo json_encode(['error' => 'Email is required']);
    exit;
}

if (empty($data['identite']['phone'])) {
    echo json_encode(['error' => 'Phone is required']);
    exit;
}

if (!is_array($data['pastWork']) || count($data['pastWork']) === 0) {
    echo json_encode(['error' => 'At least one past work entry is required']);
    exit;
}   

if (!is_array($data['education']) || count($data['education']) === 0) {
    echo json_encode(['error' => 'At least one education entry is required']);
    exit;
}
